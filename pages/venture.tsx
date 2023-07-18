import Section from "@components/ui/Section";
import Router from "next/router";
import { useEffect } from "react";

export default function Venture() {
  useEffect(() => {
    Router.push(
      "https://tum-ai.notion.site/AI-E-Lab-Pre-registration-fc4b8c1b64374453bf93021b828b6046?pvs=4"
    );
  }, []);
  return (
    <Section>
      <p>
        Redirecting to{" "}
        <a>
          {`https://tum-ai.notion.site/AI-E-Lab-Pre-registration-fc4b8c1b64374453bf93021b828b6046?pvs=4`}
        </a>
      </p>
    </Section>
  );
}
