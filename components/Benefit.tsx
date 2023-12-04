import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VariantProps, cva } from "class-variance-authority";

interface Benefit {
  icon: IconProp;
  text: string;
  title: string;
}

// Define styles with cva, including dynamic variants for color and columns.
const iconStyles = cva("h-8 w-8 rounded p-2 text-white duration-500", {
  variants: {
    color: {
      purple: "bg-purple-500",
      yellow: "bg-yellow-500",
    },
  },
});

const headingStyles = cva("text-xl font-semibold uppercase", {
  variants: {
    color: {
      purple: "text-purple-500",
      yellow: "text-yellow-500",
    },
  },
});

const gridStyles = cva("grid gap-10", {
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

const articleStyles = cva("flex flex-col gap-4", {
  variants: {
    shadow: {
      true: "shadow-lg rounded-xl p-6",
      false: "p-4",
    },
  },
});

interface Props
  extends VariantProps<typeof iconStyles>,
    VariantProps<typeof gridStyles> {
  benefits: Benefit[];
  showShadow?: boolean;
}

// The Benefits component, applying dynamic styles based on props.
const Benefits = ({ benefits, color, columns, showShadow = false }: Props) => {
  return (
    <div className={gridStyles({ columns })}>
      {benefits.map((benefit) => (
        <article
          key={benefit.title}
          className={articleStyles({ shadow: showShadow })}
        >
          <div className="flex flex-row items-center gap-6">
            <FontAwesomeIcon
              icon={benefit.icon}
              size="2xl"
              className={iconStyles({ color })}
            />
            <h3 className={headingStyles({ color })}>{benefit.title}</h3>
          </div>
          <p>{benefit.text}</p>
        </article>
      ))}
    </div>
  );
};

export default Benefits;
