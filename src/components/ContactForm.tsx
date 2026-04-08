"use client";

const regions = [
  "Pomorskie (Trójmiasto)",
  "Śląsk (Katowice)",
  "Wrocław",
  "Lubuskie (Zielona Góra)",
  "Małopolska (Kraków)",
  "Mazowieckie (Warszawa)",
  "Kujawsko-Pomorskie (Bydgoszcz)",
  "Warmia i Mazury (Olsztyn)",
];

export function ContactForm() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-border/50">
      <h3 className="text-xl font-semibold mb-6">Napisz do nas</h3>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Imię i nazwisko
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Region
          </label>
          <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
            <option value="">Wybierz region</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            placeholder="+48 000 000 000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            placeholder="jan@biuro.pl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Wiadomość
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            placeholder="W czym możemy pomóc?"
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:scale-[1.02] text-lg"
        >
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}
