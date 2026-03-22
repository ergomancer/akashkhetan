import { contacts } from "@/lib/data";
import Link from "next/link";
import { Item, ItemContent } from "./ui/item";

export default function Contact() {
  return (
    <section id="contact" role="contact">
      <Item variant={"muted"}>
        <ItemContent className="flex flex-row gap-5">
          {contacts.map((contact) => {
            const Logo = contact.Logo;
            return (
              <Link key={contact.name} href={contact.link}>
                <Logo className="size-6 md:size-8" />
              </Link>
            );
          })}
        </ItemContent>
      </Item>
    </section>
  );
}
