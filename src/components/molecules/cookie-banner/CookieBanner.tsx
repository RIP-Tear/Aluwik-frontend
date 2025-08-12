import { useEffect, useState, useCallback } from "react";
import { Cookie as CookieIcon, Check, Ban } from "lucide-react";
import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/text/Text";

type Props = {
  onAccept?: () => void;
};

const LS_KEY = "cookieConsent";

export default function CookieBanner({ onAccept }: Props) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const reveal = useCallback(() => {
    setOpen(true);
    setTimeout(() => setShow(true), 20);
  }, []);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(LS_KEY);
      if (!consent) reveal();
    } catch (e) {
      console.warn("[CookieBanner] localStorage unavailable:", e);
      reveal();
    }
  }, [reveal]);

  useEffect(() => {
    (window as any).openCookieSettings = reveal;
    return () => {
      delete (window as any).openCookieSettings;
    };
  }, [reveal]);

  const closeWithAnimation = (after?: () => void) => {
    setShow(false);
    setTimeout(() => {
      setOpen(false);
      after?.();
    }, 300);
  };

  const accept = () => {
    try {
      localStorage.setItem(LS_KEY, "true");
    } catch (e) {
      console.warn("[CookieBanner] cannot persist consent:", e);
    }
    closeWithAnimation(onAccept);
  };

  const decline = () => {
    try {
      localStorage.setItem(LS_KEY, "false");
    } catch (e) {
      console.warn("[CookieBanner] cannot persist decline:", e);
    }
    closeWithAnimation();
  };

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transform transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
    >
      <div className="w-full">
        <div className="bg-black p-4 sm:p-5">
          <div className="sm:flex items-center justify-between gap-10">
            <div className="flex items-start gap-3">
              <div>
                <CookieIcon aria-hidden className="h-6 w-6 text-orangeAccent" />
              </div>
              <Text
                text={`Używamy plików cookies w celu poprawy działania serwisu oraz analizy ruchu. Analityka (np. Google Analytics) uruchomi się dopiero po Twojej akceptacji. Możesz odrzucić – wtedy użyjemy wyłącznie niezbędnych plików cookies.`}
                className="text-greyVariant"
                size={14}
              />
            </div>

            <div className="flex sm:mt-0 mt-3 justify-center gap-5 sm:gap-3">
              <Button label="Odrzuć" icon={<Ban />} onClick={decline} size={14} />
              <Button label="Akceptuję" icon={<Check />} onClick={accept} size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
