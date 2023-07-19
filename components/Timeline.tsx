import { cx } from "class-variance-authority";

interface Event {
  title: string;
  duration: string;
  date: string;
  text: string;
}

interface EventProps {
  event: Event;
  step: number;
}

const EventComponent = ({ event, step }: EventProps) => {
  const stepGradient = [
    "from-yellow-500 to-[#EF754E]",
    "from-[#EF754E] to-red-500",
    "from-red-500 to-purple-500",
    "from-purple-500 to-purple-500",
  ];
  const stepText = [
    "text-yellow-500",
    "text-[#EF754E]",
    "text-red-500",
    "text-purple-500",
  ];
  const stepBackground = [
    "bg-yellow-500",
    "bg-[#EF754E]",
    "bg-red-500",
    "bg-purple-500",
  ];
  const stepBorder = [
    "border-yellow-500",
    "border-[#EF754E]",
    "border-red-500",
    "border-purple-500",
  ];

  const TextRight = ({ className = "" }) => (
    <div className={cx("grid grid-cols-[1px_1fr] md:grid-cols-2", className)}>
      <div className="relative h-full pl-8 md:pl-0">
        <span
          className={cx(
            "absolute right-0 z-10 -mr-8 -mt-8 rounded-full border-8",
            stepBorder[step - 1]
          )}
        >
          <span
            className={cx(
              "m-2 flex h-9 w-9 items-center justify-center rounded-full text-2xl font-bold",
              stepBackground[step - 1]
            )}
          >
            {step}
          </span>
        </span>

        <span
          className={cx(
            "absolute right-0 flex h-full w-2 bg-gradient-to-b",
            stepGradient[step - 1]
          )}
        />
      </div>
      <div className="flex flex-col items-center gap-4 pb-32 pl-20 text-center">
        <h3
          className={cx("text-2xl uppercase sm:text-4xl", stepText[step - 1])}
        >
          {event.title}
        </h3>
        <p>
          <span className="text-xl font-semibold uppercase">
            {event.duration}
          </span>
          <br />
          <span>{event.date}</span>
        </p>
        <p>{event.text}</p>
      </div>
    </div>
  );

  const TextLeft = ({ className = "" }) => (
    <div className={cx("relative w-1/2", className)}>
      <div className="relative flex h-full pl-8 md:pl-0">
        <div className="flex flex-col items-center gap-4 pb-32 pr-20 text-center">
          <h3 className={cx("text-4xl uppercase", stepText[step - 1])}>
            {event.title}
          </h3>
          <p>
            <span className="text-xl font-semibold uppercase">
              {event.duration}
            </span>
            <br />
            <span>{event.date}</span>
          </p>
          <p>{event.text}</p>
        </div>
      </div>

      <span
        className={cx(
          "absolute right-0 z-10 -mr-8 -mt-8 rounded-full border-8",
          stepBorder[step - 1]
        )}
      >
        <span
          className={cx(
            "m-2 flex h-9 w-9 items-center justify-center rounded-full text-2xl font-bold",
            stepBackground[step - 1]
          )}
        >
          {step}
        </span>
      </span>

      <span
        className={cx(
          "absolute right-0 flex h-full w-2 bg-gradient-to-b",
          stepGradient[step - 1]
        )}
      />
    </div>
  );

  if (step % 2 !== 0) {
    return <TextRight />;
  }

  return (
    <>
      <TextRight className="md:hidden" />
      <TextLeft className="hidden md:grid" />
    </>
  );
};

interface Props {
  events: Event[];
}

const Timeline = ({ events }: Props) => {
  return (
    <div className="pt-8">
      {events.map((event, i) => (
        <EventComponent key={event.title} event={event} step={i + 1} />
      ))}
    </div>
  );
};

export default Timeline;
