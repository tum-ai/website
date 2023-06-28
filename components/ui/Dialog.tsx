import * as RDialog from "@radix-ui/react-dialog";
import React from "react";

export interface Props {
    content: {
        "trigger": React.ReactNode,
        "title": React.ReactNode,
        "body": React.ReactNode,
        "close": React.ReactNode,
    };
}

export default function Dialog({
    content
}: Props) {
    return (
        <RDialog.Root>
            <RDialog.Trigger className="rounded-full bg-purple-800 px-6 py-2 font-medium text-white duration-200 hover:bg-purple-700">
                {content["trigger"]}
            </RDialog.Trigger>
            <RDialog.Portal>
                <RDialog.Overlay className="fixed inset-0 flex items-center bg-blue-800/80 backdrop-blur-lg" />
                <RDialog.Content className="container fixed left-[50%] top-[50%] mx-auto max-w-lg translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-2xl bg-white p-8">
                    <RDialog.Title className="text-2xl font-bold text-purple-500">
                        {content["title"]}
                    </RDialog.Title>
                    {content["body"]}
                    <div className="flex justify-end">
                        <RDialog.Close asChild>
                            {content["close"]}
                        </RDialog.Close>
                    </div>
                </RDialog.Content>
            </RDialog.Portal>
        </RDialog.Root>
    );
}
