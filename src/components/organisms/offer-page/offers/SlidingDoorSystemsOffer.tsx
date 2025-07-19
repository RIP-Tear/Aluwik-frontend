import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { CheckCircle, Hammer, MapPin, MoveHorizontal } from "lucide-react";

const SlidingDoorSystemsOffer = () => {
  const relatedOffers = [
    offers[0], // Drzwi aluminiowe
    offers[5], // Okna przesuwane
    offers[2], // Fasady
    offers[8], // Zadaszenia tarasów
  ];

  return (
    <OfferPageTemplate
      title="Systemy drzwi przesuwnych"
      highlightWords={["drzwi"]}
      imageSrc="/img/drzwi-przesuwane.webp"
      imageAlt="Systemy przesuwne aluminiowe – duże przeszklenia ALUWIK Pomorskie"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: CheckCircle,
          title: "Zalety",
          items: [
            "Oszczędność miejsca w pomieszczeniu",
            "Nowoczesny i elegancki wygląd",
            "Możliwość montażu na różnych typach ścian",
            "Cicha i płynna praca systemu",
          ],
        },
        {
          icon: Hammer,
          title: "Zakres usług",
          items: [
            "Doradztwo techniczne i projektowe",
            "Dostawa i przygotowanie elementów",
            "Profesjonalny montaż na miejscu",
            "Opcjonalny serwis i konserwacja",
          ],
        },
        {
          icon: MoveHorizontal,
          title: "Rodzaje systemów",
          items: [
            "Naścienne i chowane w ścianie",
            "Jednoskrzydłowe i dwuskrzydłowe",
            "Systemy aluminiowe i szklane",
          ],
        },
        {
          icon: MapPin,
          title: "Gdzie działamy?",
          items: [
            "Tczew i okolice",
            "Województwo pomorskie",
            "Cała Polska",
            "Realizacje również za granicą",
          ],
        },
      ]}
      sections={[
        {
          heading: "Zastosowanie drzwi przesuwnych",
          content:
            "<strong>Systemy drzwi przesuwnych</strong> to praktyczne i estetyczne rozwiązanie stosowane zarówno w nowoczesnych domach, jak i w lokalach użytkowych. Sprawdzają się w przestrzeniach mieszkalnych, biurach, kawiarniach, restauracjach oraz w budynkach użyteczności publicznej, zapewniając komfort i funkcjonalność.",
        },
        {
          heading: "Oferta dostępna w całej Polsce i za granicą",
          content:
            "Nasza oferta obejmuje <strong>nowoczesne systemy drzwi przesuwnych</strong> dostępne dla klientów z całej Polski i zagranicy. Choć firma wywodzi się z Pomorza, obsługujemy zlecenia w dowolnej lokalizacji, dostarczając rozwiązania najwyższej jakości. Drzwi przesuwne to idealny wybór, gdy zależy nam na oszczędności miejsca i nowoczesnym wykończeniu wnętrz.",
        },
        {
          heading: "Dlaczego warto wybrać nasze systemy przesuwne?",
          content: [
            "<strong>Uniwersalność</strong> – nasze drzwi przesuwne można montować w domach prywatnych, lokalach usługowych czy przestrzeniach komercyjnych. Sprawdzają się na ścianach murowanych oraz w konstrukcjach z karton-gipsu.",
            "<strong>Trwałość i certyfikowana jakość</strong> – systemy produkowane są z solidnych materiałów, odpornych na uszkodzenia mechaniczne i intensywną eksploatację. Każdy element posiada wymagane certyfikaty potwierdzające jakość.",
            "<strong>Łatwy montaż</strong> – instalacja przebiega sprawnie i bezinwazyjnie. Mechanizmy są bezawaryjne, a ich działanie ciche i płynne przez długie lata.",
            "<strong>Indywidualne dopasowanie</strong> – oferujemy szeroki wybór kolorów i wymiarów, dzięki czemu drzwi harmonijnie wpisują się w każdą aranżację – od nowoczesnej po klasyczną.",
          ],
        },
        {
          heading: "Kompleksowa obsługa klienta",
          content:
            "Oferujemy pełne wsparcie: od doradztwa technicznego, przez produkcję i dostawę, aż po profesjonalny <strong>montaż drzwi przesuwnych</strong>. Wszystko po to, aby nasi klienci mogli cieszyć się funkcjonalnymi i estetycznymi rozwiązaniami na lata.",
        },
      ]}
    />
  );
};

export default SlidingDoorSystemsOffer;
