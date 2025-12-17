import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/text/Text";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import React from "react";

const NavbarContact = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orangeAccent to-alertRed py-4 px-5 flex justify-between items-center ">
        <div>
          <Text text="Pon–Pt 07:00–16:00" size={16} className="text-white" />
        </div>
        <div className="flex gap-4">
          <Button
            label={"609 604 571"}
            icon={<Phone />}
            color="black"
            href="tel:609604571"
            size={14}
          />
          <Button
            label={"798 953 877"}
            icon={<Phone />}
            color="black"
            href="tel:798953877"
            size={14}
          />
          <Button
            label={"biuro@aluwik.pl"}
            icon={<MessageCircle />}
            color="black"
            href="mailto:biuro@aluwik.pl"
            size={14}
          />
          <Button
            label={"Aleja Solidarności 8, 83-110 Tczew"}
            icon={<MapPin />}
            color="black"
            blank
            size={14}
            href="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew"
          />
        </div>
      </div>
    </>
  );
};

export default NavbarContact;
