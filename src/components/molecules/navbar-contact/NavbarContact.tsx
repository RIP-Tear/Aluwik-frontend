import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/text/Text";
import { MessageCircle, Phone } from "lucide-react";
import React from "react";

const NavbarContact = () => {
  return (
    <div className="bg-orangeAccent py-4 px-5 flex justify-end items-center gap-10">
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
        label={"biuro.aluwik@gmail.com"}
        icon={<MessageCircle />}
        color="black"
        href="mailto:biuro.aluwik@gmail.com"
        size={14}
      />
    </div>
  );
};

export default NavbarContact;
