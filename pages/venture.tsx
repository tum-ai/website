import Section from "@components/ui/Section";
import Router from "next/router";
import { useEffect } from "react";

export default function Venture() {
  useEffect(() => {
    Router.push(
      "/e-lab"
    );
  }, []);
  return (
    <Section>
      <p>
        Redirecting to{" "}
        <a>
          {`/e-lab`}
        </a>
      </p>
    </Section>
  );
}
