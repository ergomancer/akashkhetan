import { contacts } from "@/lib/data";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" role="contact">
      {contacts.map((contact) => {
        const Logo = contact.Logo;
        return (
          <Link key={contact.name} href={contact.link}>
            <Logo />
          </Link>
        );
      })}
    </section>
  );
}
