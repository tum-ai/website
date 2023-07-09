import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VariantProps, cva } from "class-variance-authority";

interface Benefit {
  icon: IconProp;
  text: string;
  title: string;
}

const iconStyles = cva("h-8 w-8 rounded p-2 text-white duration-500", {
  variants: {
    color: {
      purple: "bg-purple-500",
      yellow: "bg-yellow-500",
    },
  },
});

const headingStyles = cva("mb-4 text-xl font-semibold uppercase", {
  variants: {
    color: {
      purple: "text-purple-500",
      yellow: "text-yellow-500",
    },
  },
});

interface Props extends VariantProps<typeof iconStyles> {
  benefits: Benefit[];
}

const Benefits = ({ benefits, color }: Props) => {
  return (
    <div className="grid gap-16 md:grid-cols-2">
      {benefits.map((benefit) => (
        <article key={benefit.title} className="flex gap-8">
          <FontAwesomeIcon
            icon={benefit.icon}
            size="2xl"
            className={iconStyles({ color })}
          />
          <div>
            <h3 className={headingStyles({ color })}>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Benefits;
