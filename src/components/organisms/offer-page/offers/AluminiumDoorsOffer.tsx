import { DoorClosed, AppWindow, Layers3, PanelLeftOpen, MapPin } from "lucide-react";
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const AluminiumDoorsOffer = () => {
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[2], // Fasady
    offers[4], // Systemy drzwi przesuwanych
    offers[10], // Drzwi przeciwpożarowe
  ];

  return (
    <OfferPageTemplate
      title="Drzwi aluminiowe"
      highlightWords={["aluminiowe"]}
      imageSrc="/img/drzwi-aluminiowe.webp"
      imageAlt="Drzwi aluminiowe Tczew – producent stolarki aluminiowej ALUWIK"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: DoorClosed,
          title: "Dlaczego warto?",
          items: [
            "Trwałość i solidność na lata",
            "Systemy antywłamaniowe i odporność na czynniki zewnętrzne",
            "Stabilna i solidna konstrukcja",
          ],
        },
        {
          icon: AppWindow,
          title: "Dopasowanie do projektu",
          items: [
            "Możliwość malowania na dowolny kolor",
            "Uniwersalny design pasujący do elewacji",
          ],
        },
        {
          icon: Layers3,
          title: "Izolacja termiczna",
          items: [
            "Specjalna konstrukcja ograniczająca straty ciepła",
            "Wpływ na redukcję kosztów ogrzewania",
          ],
        },
        {
          icon: PanelLeftOpen,
          title: "Minimalna konserwacja",
          items: [
            "Odporność na korozję i warunki atmosferyczne",
            "Brak konieczności częstej konserwacji",
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
          heading: "Nowoczesne i funkcjonalne drzwi aluminiowe",
          content:
            "Oferujemy solidne drzwi aluminiowe o szerokim zastosowaniu – od budynków mieszkalnych i przemysłowych po obiekty użyteczności publicznej. Nasze rozwiązania cechują się wysokim standardem wykonania, trwałością i eleganckim wyglądem. Działamy na terenie całej Polski oraz za granicą, dostarczając i montując drzwi w zgodzie z oczekiwaniami klienta.",
        },
        {
          heading: "Wszechstronne i praktyczne",
          content: [
            "Trwała konstrukcja odporna na czynniki zewnętrzne",
            "Uniwersalny i estetyczny design dopasowany do elewacji",
            "Możliwość lakierowania w dowolnym kolorze",
            "Dodatkowe systemy antywłamaniowe i zabezpieczenia",
            "Właściwości termoizolacyjne redukujące straty ciepła",
            "Niskie wymagania konserwacyjne",
          ],
        },
        {
          heading: "Indywidualne doradztwo i kompleksowa obsługa",
          content:
            "Z przyjemnością pomożemy w wyborze odpowiedniego modelu drzwi aluminiowych. Nasz zespół służy doradztwem technicznym i estetycznym, dopasowując ofertę do potrzeb inwestycji prywatnych i komercyjnych.",
        },
      ]}
    />
  );
};

export default AluminiumDoorsOffer;
