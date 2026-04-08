"use client";

import { useAuth } from "@/lib/useAuth";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-8">
        Ustawienia
      </h1>

      <div className="space-y-6 max-w-2xl">
        {/* Account */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-foreground mb-4">Konto</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-500">Email</span>
              <span className="text-sm font-medium text-foreground">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-500">UID</span>
              <span className="text-xs font-mono text-gray-400">{user?.uid}</span>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-foreground mb-4">Integracje</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-foreground">Tpay</div>
                <div className="text-xs text-gray-400">Płatności online</div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">Do konfiguracji</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-foreground">Fakturownia</div>
                <div className="text-xs text-gray-400">Automatyczne faktury</div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">Do konfiguracji</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-foreground">Firebase</div>
                <div className="text-xs text-gray-400">Baza danych + Storage</div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">Połączony</span>
            </div>
          </div>
        </div>

        {/* Store info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-foreground mb-4">Dane sklepu</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-500">Firma</span>
              <span className="font-medium text-foreground">Nieruchomości Spod Lady Sp. z o.o.</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-500">NIP</span>
              <span className="font-medium text-foreground">5833446343</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-500">KRS</span>
              <span className="font-medium text-foreground">0000959155</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-500">Adres</span>
              <span className="font-medium text-foreground">ul. Goplańska 148/2, 80-178 Gdańsk</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-foreground">kontakt@nieruchomoscispodlady.pl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
