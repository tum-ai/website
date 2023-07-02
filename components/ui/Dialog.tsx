import * as RadixDialog from "@radix-ui/react-dialog";
import React from "react";
import Button from "./Button";

export interface Props {
  trigger: React.ReactNode;
  title: string;
  body: React.ReactNode;
  hasCloseButton?: boolean;
}

export default function Dialog(props: Props) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{props["trigger"]}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 flex items-center bg-blue-800/80 backdrop-blur-lg" />
        <RadixDialog.Content className="container fixed left-[50%] top-[50%] mx-auto max-w-lg translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-2xl bg-white p-8">
          <RadixDialog.Title className="text-2xl font-bold text-purple-500">
            {props["title"]}
          </RadixDialog.Title>
          {props["body"]}
          <div className="flex justify-end">
            <RadixDialog.Close asChild>
              <Button className="text-white">Close</Button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
