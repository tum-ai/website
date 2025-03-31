import { type LucideIcon } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

interface Benefit {
  icon: LucideIcon;
  text: string;
  title: string;
}

// Define styles with cva, including dynamic variants for color and columns.
const iconContainerStyles = cva(
  "flex items-center justify-center rounded-xl p-3 backdrop-blur-sm transition-all duration-300",
  {
    variants: {
      color: {
        purple: "bg-purple-500/10 text-purple-500 ring-1 ring-purple-500/20",
        yellow: "bg-yellow-500/10 text-yellow-500 ring-1 ring-yellow-500/20",
      },
    },
  },
);

const headingStyles = cva("text-base font-medium text-foreground", {
  variants: {
    color: {
      purple: "text-purple-600 dark:text-purple-400",
      yellow: "text-yellow-600 dark:text-yellow-400",
    },
  },
});

const gridStyles = cva("grid gap-8", {
  variants: {
    columns: {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-2 xl:grid-cols-4",
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

const articleStyles = cva("flex flex-col gap-4 transition-all duration-200", {
  variants: {
    shadow: {
      true: "rounded-xl p-6 bg-white/5 backdrop-blur-md border border-white/10 dark:bg-black/20",
      false: "p-5",
    },
  },
});

interface Props
  extends VariantProps<typeof iconContainerStyles>,
    VariantProps<typeof gridStyles> {
  benefits: Benefit[];
  showShadow?: boolean;
}

const Benefits = ({ benefits, color, columns, showShadow = false }: Props) => {
  return (
    <div className={gridStyles({ columns })}>
      {benefits.map((benefit) => (
        <article
          key={benefit.title}
          className={articleStyles({ shadow: showShadow })}
        >
          <div className="flex flex-row items-start gap-4">
            <div className={iconContainerStyles({ color })}>
              <benefit.icon size={20} strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className={headingStyles({ color })}>{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Benefits;
