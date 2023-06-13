import React from "react";
import { cva } from "class-variance-authority";

const styles = cva(
    'rounded-full px-8 py-2 font-bold duration-500',
    {
        variants: {
            intent: {
                primary: 'bg-primary-500 hover:bg-primary-400'
            }
        }
    }
)

export default function Button({ intent, children }) {
    return (
        <button className={styles({ intent })}>{children}</button>
    )
}