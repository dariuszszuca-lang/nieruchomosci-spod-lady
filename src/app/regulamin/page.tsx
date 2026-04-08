import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — Nieruchomości Spod Lady",
  description: "Regulamin serwisu NieruchomosciSpodLady.pl",
};

export default function Regulamin() {
  return (
    <>
      <PageHero title="Regulamin" subtitle="Regulamin serwisu NieruchomosciSpodLady.pl" />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-foreground [&_h2]:font-[family-name:var(--font-montserrat)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-4 [&_strong]:text-foreground [&_ul]:space-y-2 [&_ol]:space-y-2">
            <h2>I. Definicje</h2>
            <p>
              <strong>Administrator Danych Osobowych</strong> — Nieruchomości Spod Lady Sp. z o.o. z siedzibą w Gdańsku (80-178), ul. Goplańska 148/2, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0000959155, NIP 5833446343, REGON 521447775.
            </p>
            <p><strong>Klient</strong> — osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z usług oferowanych przez Sprzedawcę za pośrednictwem Serwisu.</p>
            <p><strong>Konsument</strong> — Klient będący osobą fizyczną dokonującą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.</p>

            <h2>II. Warunki ogólne</h2>
            <ol>
              <li>Umowa zawierana jest w języku polskim, zgodnie z polskim prawem i niniejszym regulaminem.</li>
              <li>Wszystkie ceny podawane przez Sprzedawcę wyrażone są w polskiej walucie i są cenami brutto (zawierają podatek VAT).</li>
              <li>Potwierdzenie zawarcia umowy następuje drogą mailową.</li>
              <li>Klient ma prawo dostępu do swoich danych osobowych, ich poprawiania oraz żądania ich usunięcia.</li>
            </ol>

            <h2>III. Zawarcie umowy i realizacja</h2>
            <ol>
              <li>Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu.</li>
              <li>W celu złożenia zamówienia Klient wybiera produkt, dodaje go do koszyka, wypełnia formularz zamówienia i dokonuje płatności.</li>
              <li>Realizacja zamówienia następuje po zaksięgowaniu płatności.</li>
            </ol>

            <h2>IV. Prawo do odstąpienia od umowy</h2>
            <p>
              Konsumentowi przysługuje prawo odstąpienia od umowy w terminie 14 dni bez podania jakiejkolwiek przyczyny. Termin do odstąpienia wygasa po upływie 14 dni od dnia zawarcia umowy.
            </p>

            <h2>V. Rękojmia</h2>
            <p>
              Sprzedawca odpowiada wobec Klienta za wady fizyczne i prawne produktu na zasadach określonych w Kodeksie cywilnym.
            </p>

            <h2>VI. Reklamacja</h2>
            <p>
              Reklamacje można składać drogą mailową na adres: <a href="mailto:kontakt@nieruchomoscispodlady.pl" className="text-primary hover:underline">kontakt@nieruchomoscispodlady.pl</a>. Sprzedawca ustosunkuje się do reklamacji w terminie 14 dni od dnia jej otrzymania.
            </p>

            <h2>VII. Polityka prywatności</h2>
            <p>
              Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w <a href="/polityka-prywatnosci" className="text-primary hover:underline">Polityce Prywatności</a>.
            </p>

            <div className="mt-16 p-6 bg-surface rounded-2xl border border-border/50">
              <p className="text-sm text-text-secondary">
                <strong className="text-foreground">Nieruchomości Spod Lady Sp. z o.o.</strong><br />
                ul. Goplańska 148/2, 80-178 Gdańsk<br />
                KRS 0000959155 | NIP 5833446343 | REGON 521447775<br />
                kontakt@nieruchomoscispodlady.pl
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
