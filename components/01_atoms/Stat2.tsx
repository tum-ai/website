export default function Stat2({ description, value, color = "white" }) {
  const textColorClass = `text-${color}`;

  return (
    <div className="flex h-28 w-48 max-w-sm flex-col items-center justify-center space-y-1 rounded-xl">
      <dd className={`${textColorClass} text-5xl font-semibold`}>{value}</dd>
      <dt className={`${textColorClass} text-md`}>{description}</dt>
    </div>
  );
}
