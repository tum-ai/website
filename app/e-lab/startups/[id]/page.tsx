import { startups, Startup } from "@data/e-lab-startups";
import StartupDetails from "@components/StartupDetails";

export default async function StartupPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const startup: Startup | undefined = startups.find((startup: Startup) => {
    if (startup && startup.id === params.id) {
      return startup;
    }
    return undefined;
  });

  if (!startup) {
    return <div>Startup Not Found</div>;
  }

  return <StartupDetails startup={startup} />;
}
