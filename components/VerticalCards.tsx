import Image from "next/image";
import React from "react";

export interface Props {
  data: {
    img: string;
    title: string;
    text: string;
    subtext?: string;
    body: React.ReactNode;
  };
}

export default function VerticalCards({ data }) {
  return (
    <div className="m-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-60 2xl:grid-cols-4">
      {data.map((obj) => (
        <Card data={obj} />
      ))}
    </div>
  );
}

function Card({ data }) {
  return (
    <article className="border border-gray-300 bg-white shadow transition-all duration-200 hover:scale-105 hover:shadow-xl">
      <Image alt={data["img"]} src={data["img"]} width={1000} height={100} />
      <div className="flex flex-col space-y-4 p-4 text-center">
        <h3 className="text-xl font-semibold">{data["title"]}</h3>
        <hr />
        <p>{data["text"]}</p>
        {data["body"] && data["body"]}
        {data["subText"] && <p className="font-thin">{data["subText"]}</p>}
      </div>
    </article>
  );
}
