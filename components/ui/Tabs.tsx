import * as RTabs from "@radix-ui/react-tabs";
import React from "react";

export interface Props {
  data: {
    [name: string]: React.ReactNode;
  };
}

export default function Tabs({ data }: Props) {
  return (
    <RTabs.Root defaultValue="students">
      <RTabs.List className="grid grid-cols-2 text-xl">
        {Object.keys(data).map((key) => (
          <RTabs.Trigger
            key={key}
            value={key}
            className="border-b-2 border-gray-400 p-4 text-gray-400 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
          >
            {key}
          </RTabs.Trigger>
        ))}
      </RTabs.List>
      {Object.keys(data).map((key) => (
        <RTabs.Content key={key} value={key}>
          {data[key]}
        </RTabs.Content>
      ))}
    </RTabs.Root>
  );
}
