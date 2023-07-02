import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";

export interface Props {
  tabs: {
    [name: string]: React.ReactNode;
  };
}

export default function Tabs({ tabs }: Props) {
  return (
    <RadixTabs.Root defaultValue={Object.keys(tabs).at(0)}>
      <RadixTabs.List className="grid grid-cols-2 text-xl">
        {Object.keys(tabs).map((tabName) => (
          <RadixTabs.Trigger
            key={tabName}
            value={tabName}
            className="border-b-2 border-gray-400 p-4 text-gray-400 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
          >
            {tabName}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {Object.keys(tabs).map((tabName) => (
        <RadixTabs.Content key={`${tabName}-content`} value={tabName}>
          {tabs[tabName]}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
