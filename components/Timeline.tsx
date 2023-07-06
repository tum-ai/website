import Image from "next/image";
import { motion } from "framer-motion";

function Phase({ title, date, duration, imageSrc, phaseText }) {
  return (
    <motion.div
      className="relative flex flex-row justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} // customize transition here
      viewport={{ once: true }}
    >
      <div className="mr-4 flex w-10 flex-col items-center md:w-24">
        <div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 ">
            <div className="h-4 w-4 rounded-full bg-blue-600"></div>
          </div>
        </div>
        <div className="h-full w-px bg-blue-300"></div>
      </div>
      <div>
        <h2 className="mb-4 inline-block rounded-3xl bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 text-xs font-medium text-gray-100">
          {date} <br />({duration})
        </h2>
        <div className="relative mb-10 flex flex-1 flex-col rounded-3xl border-b-4 border-blue-200 bg-white shadow">
          <Image
            src={imageSrc}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />

          <div className="z-20 p-6">
            <p className="mb-2 text-xl font-bold text-gray-900">{title}</p>
            <p className="text-gray-800">{phaseText}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <div className="z-0 max-w-6xl justify-center md:px-6 lg:py-8">
      <div className="mx-auto w-full lg:max-w-3xl">
        <Phase
          title="Formation and Exploration"
          date="2nd October - 15th October 2023"
          duration="2 Weeks"
          imageSrc="/assets/e-lab/e-phases/co-founder.jpg"
          phaseText="
                    You will interact with potential co-founders, explore ideas
                    and form teams through the AI E-Lab onboarding, co-founder
                    matching/team building, and ideation activities. This phase
                    will end with a relaxed informal event where you and your
                    team will share your ideas and concepts. Everybody who finds
                    a team is admitted to the next stage.
                    "
        />

        <Phase
          title="Idea Validation and Litmus Test"
          date="16th October - 12th November 2023"
          duration="4 Weeks"
          imageSrc="/assets/e-lab/e-phases/ideation.jpeg"
          phaseText="
                    You will focus on validating and shaping your startup idea
                    from the previous phase through market research and
                    developing robust business models that will undergo
                    evaluation in the first pitch event, a Litmus Test to a
                    jury."
        />
        <Phase
          title="Build-Measure-Learn
                    "
          date="13th November - 10 December 2023"
          duration="4 Weeks"
          imageSrc="/assets/e-lab/e-phases/building.jpeg"
          phaseText="
                    If your team can make it through the Litmus Test with
                    validated ideas you will start to build prototypes, measure
                    performance, gather valuable feedback from mentors, industry
                    experts, and customers, and continuously iterate towards
                    achieving product-market fit. This phase will end with a
                    Stress test (second pitch event) where a more experienced
                    jury will rigorously test the product market fit and
                    prototypes of your startup and determine who is fit enough
                    to make it to the final pitch to pitch to investors in Phase
                    4."
        />
        <Phase
          title="Refinement and Final Pitch
                    "
          date="11th December 2023 - 19th Januray 2024"
          duration="4 Weeks"
          imageSrc="/assets/e-lab/e-phases/final-pitch.jpg"
          phaseText="
                    Should your team successfully pass the Stress Test, you will
                    continue to refine your prototypes into Minimum Viable
                    Products (MVPs) and further refine your business models, and
                    pitches based on the valuable feedback received from
                    customers, mentors, industry experts, and the jury during
                    the Stress Test. The goal of your startup in this phase will
                    be to prepare to showcase your polished startups to real
                    investors and a public audience in the AI E-Lab final pitch
                    event."
        />
      </div>
    </div>
  );
}
