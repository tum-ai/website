import { cx } from "class-variance-authority";

export default function Stat2({ description, value, className = "text-white" }) {
  return (
    <div className={cx("flex h-40 w-48 max-w-sm flex-col items-center justify-center space-y-1 rounded-xl", className)}>
      <h3 className="text-5xl font-semibold">{value}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
}
