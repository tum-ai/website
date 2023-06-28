import { cx } from "class-variance-authority";

export default function Stat2({ description, value, className = "text-white" }) {
  return (
    <div className={cx("flex h-40 w-48 max-w-sm flex-col items-center justify-center space-y-1 rounded-xl", className)}>
      <dd className={`text-5xl font-semibold`}>{value}</dd>
      <dt className={`text-md`}>{description}</dt>
    </div>
  );
}
