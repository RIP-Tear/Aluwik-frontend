"use client";
import React, { useState } from "react";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "@/components/atoms/button/Button";
import { Check, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgegedla";

const FormContact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim() && !phone.trim()) {
      setError("Podaj numer telefonu lub adres e-mail.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("source", "aluwik.pl");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        console.error("Formspree error", await res.json());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageSection>
      <div className="grid md:grid-cols-2 gap-10 items-start mb-5 sm:mb-[50px]">
        <div className="space-y-4">
          <Heading
            label="Masz pytania? Napisz do nas"
            size={36}
            as="h2"
            highlightWords={["pytania"]}
          />
          <Text
            text="Zawsze chętnie odpowiadamy na wiadomości. Jeśli chcesz zapytać o naszą ofertę lub umówić spotkanie, skontaktuj się z nami w dowolny sposób."
            size={16}
          />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Imię i nazwisko / Nazwa firmy"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={loading}
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-alertRed border-2 border-orangeAccent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numer telefonu (opcjonalnie)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            disabled={loading}
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-alertRed border-2 border-orangeAccent"
          />
          <input
            type="email"
            name="email"
            placeholder="Adres e-mail (opcjonalnie)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-alertRed border-2 border-orangeAccent"
          />
          <textarea
            name="message"
            placeholder="Wiadomość"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            disabled={loading}
            className="w-full p-3 rounded-xl bg-white text-black focus:outline-alertRed border-2 border-orangeAccent"
          />

          {error && <Text text={error} className="text-alertRed" size={16} />}

          <div className="flex justify-end">
            <Button
              label={success ? "Wiadomość została wysłana" : "Wyślij wiadomość"}
              type="submit"
              icon={success ? <Check /> : <Send />}
              color={success ? "greenAccept" : "orangeAccent"}
              loading={loading}
              disabled={loading || success}
            />
          </div>
        </form>
      </div>
    </PageSection>
  );
};

export default FormContact;
