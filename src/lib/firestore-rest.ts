import { auth } from "./firebase";

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

async function getAuthHeaders(): Promise<Record<string, string>> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

function toFirestoreValue(val: unknown): Record<string, unknown> {
  if (typeof val === "string") return { stringValue: val };
  if (typeof val === "number") return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  if (typeof val === "boolean") return { booleanValue: val };
  if (Array.isArray(val)) return { arrayValue: { values: val.map(toFirestoreValue) } };
  if (val === null || val === undefined) return { nullValue: null };
  return { stringValue: String(val) };
}

function fromFirestoreValue(val: Record<string, unknown>): unknown {
  if ("stringValue" in val) return val.stringValue;
  if ("integerValue" in val) return Number(val.integerValue);
  if ("doubleValue" in val) return val.doubleValue;
  if ("booleanValue" in val) return val.booleanValue;
  if ("nullValue" in val) return null;
  if ("arrayValue" in val) {
    const arr = val.arrayValue as { values?: Record<string, unknown>[] };
    return (arr.values || []).map(fromFirestoreValue);
  }
  return null;
}

function toFields(obj: Record<string, unknown>): Record<string, Record<string, unknown>> {
  const fields: Record<string, Record<string, unknown>> = {};
  for (const [key, val] of Object.entries(obj)) {
    fields[key] = toFirestoreValue(val);
  }
  return fields;
}

function fromDoc(doc: { name: string; fields: Record<string, Record<string, unknown>> }): Record<string, unknown> {
  const id = doc.name.split("/").pop()!;
  const result: Record<string, unknown> = { id };
  for (const [key, val] of Object.entries(doc.fields || {})) {
    result[key] = fromFirestoreValue(val);
  }
  return result;
}

export async function addDocument(collectionName: string, data: Record<string, unknown>) {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE}/${collectionName}?key=${API_KEY}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ fields: toFields(data) }),
  });
  if (!res.ok) throw new Error(`Firestore POST error: ${res.status} ${await res.text()}`);
  return fromDoc(await res.json());
}

export async function updateDocument(collectionName: string, docId: string, data: Record<string, unknown>) {
  const headers = await getAuthHeaders();
  const updateMask = Object.keys(data).map((k) => `updateMask.fieldPaths=${k}`).join("&");
  const res = await fetch(`${BASE}/${collectionName}/${docId}?${updateMask}&key=${API_KEY}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ fields: toFields(data) }),
  });
  if (!res.ok) throw new Error(`Firestore PATCH error: ${res.status} ${await res.text()}`);
  return fromDoc(await res.json());
}

export async function deleteDocument(collectionName: string, docId: string) {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE}/${collectionName}/${docId}?key=${API_KEY}`, { method: "DELETE", headers });
  if (!res.ok) throw new Error(`Firestore DELETE error: ${res.status}`);
}

export async function getDocuments(collectionName: string): Promise<Record<string, unknown>[]> {
  const res = await fetch(`${BASE}/${collectionName}?key=${API_KEY}&orderBy=createdAt desc`);
  if (!res.ok) throw new Error(`Firestore GET error: ${res.status}`);
  const json = await res.json();
  return (json.documents || []).map(fromDoc);
}

export async function getDocument(collectionName: string, docId: string): Promise<Record<string, unknown> | null> {
  const res = await fetch(`${BASE}/${collectionName}/${docId}?key=${API_KEY}`);
  if (!res.ok) return null;
  return fromDoc(await res.json());
}

export async function getCount(collectionName: string): Promise<number> {
  const res = await fetch(`${BASE}/${collectionName}?key=${API_KEY}&pageSize=0`);
  if (!res.ok) return 0;
  const json = await res.json();
  return (json.documents || []).length;
}
