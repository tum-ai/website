import Image from "next/image";
import React from "react";

export interface Props {
  cards: {
    img: string;
    title: string;
    text: string;
    subtext?: string;
    body?: React.ReactNode;
  }[];
}

export default function VerticalCards({ cards }: Props) {
  return (
    <div className="m-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-60 2xl:grid-cols-4">
      {cards.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </div>
  );
}

function Card({ card }) {
  return (
    <article className="border border-gray-300 bg-white shadow transition-all duration-200 hover:scale-105 hover:shadow-xl">
      <Image alt={card.title} src={card.img} width={1000} height={100} />

      <div className="flex flex-col space-y-4 p-4 text-center">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <hr />
        <p>{card.text}</p>
        {!!card.body && card.body}
        {!!card.subText && <p className="font-thin">{card.subText}</p>}
      </div>
    </article>
  );
}
