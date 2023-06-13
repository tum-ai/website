import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const styles = cva(
    'rounded-full px-8 py-2 font-bold duration-500',
    {
        variants: {
            intent: {
                primary: 'bg-primary-500 hover:bg-primary-400'
            }
        },
        defaultVariants: {
            intent: 'primary'
        }
    }
)

export interface Props extends VariantProps<typeof styles> {
    children: React.ReactNode,
}

export default function Button({ intent, children }: Props) {
    return (
        <button className={styles({ intent })}>{children}</button>
    )
}