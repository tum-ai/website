import { cx } from "class-variance-authority";

export default function Stat({ description, value, className = "text-white" }) {
  return (
    <div className={cx("flex flex-col items-center gap-2 p-8", className)}>
      <h3 className="text-5xl font-extrabold">{value}</h3>
      <p className="text-md font-medium">{description}</p>
    </div>
  );
}
