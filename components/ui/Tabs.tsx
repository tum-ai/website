import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";

export interface Props {
  tabs: {
    [name: string]: React.ReactNode;
  };
}

export default function Tabs({ tabs: data }: Props) {
  return (
    <RadixTabs.Root defaultValue="students">
      <RadixTabs.List className="grid grid-cols-2 text-xl">
        {Object.keys(data).map((tabName) => (
          <RadixTabs.Trigger
            key={tabName}
            value={tabName}
            className="border-b-2 border-gray-400 p-4 text-gray-400 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
          >
            {tabName}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {Object.keys(data).map((tabContent) => (
        <RadixTabs.Content key={tabContent} value={tabContent}>
          {data[tabContent]}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
