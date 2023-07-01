import Image from "next/image";
import React from "react";
import Link from 'next/link';
import Button, { type Props as ButtonProps } from "./ui/Button";

export interface Props {
  cards: CardProps[]
}

export default function VerticalCards({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
      {cards.map((card) => (
        <Card {...card} key={card.title} />
      ))}
    </div>
  );
}

interface CardProps {
  img: string;
  title: string;
  text: string;
  subtext?: string;
  buttons?: (Omit<ButtonProps, "children"> & { text: string, href: string })[]
}

function Card(card: CardProps) {
  return (
    <article className="border rounded-lg border-gray-300 bg-white shadow overflow-hidden flex flex-col">
      <Image alt={card.title} src={card.img} width={1000} height={100} />

      <div className="flex flex-col space-y-4 p-4">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <p>{card.text}</p>
        {!!card.subtext && <p className="text-gray-500">{card.subtext}</p>}
      </div>

      {!!card.buttons &&
        <div className="mt-auto relative bottom-0 p-4">
          <div className="space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
            {card.buttons.map(({ href, text, ...buttonData }) => (<Button key={href} asChild {...buttonData}>
              <Link href={href}>{text}</Link>
            </Button>))}
          </div>
        </div>
      }
    </article>
  );
}
