import PageSection from "@/components/atoms/page-section/PageSection";
import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/text/Text";
import React from "react";
import { Heading } from "@/components/atoms/heading/Heading";
import { Send } from "lucide-react";

const FormContact = () => {
  return (
    <PageSection>
      <div className="grid md:grid-cols-2 gap-10 items-start mb-5 sm:mb-[50px]">
        {/* LEWA STRONA – TEKST */}
        <div className="space-y-4">
          <Heading
            label="Masz pytania? Napisz do nas"
            className="text-orangeAccent"
            size={24}
            as="h2"
          />
          <Text
            text="Zawsze chętnie odpowiadamy na wiadomości. Jeśli chcesz zapytać o naszą ofertę lub umówić spotkanie, skontaktuj się z nami w dowolny sposób."
            size={16}
          />
        </div>

        {/* PRAWA STRONA – FORMULARZ */}
        <form className="space-y-4">
          <input
            type="tel"
            placeholder="Numer telefonu"
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-orangeAccent"
          />
          <input
            type="text"
            placeholder="Imię i nazwisko"
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-orangeAccent"
          />
          <textarea
            placeholder="Wiadomość"
            rows={4}
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-orangeAccent"
          />

          <div className="flex justify-end">
            <Button label="Wyślij wiadomość" type="submit" icon={<Send />} />
          </div>
        </form>
      </div>
    </PageSection>
  );
};

export default FormContact;
