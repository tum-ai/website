import Section from "@ui/Section";
import Header1 from "../components/02_molecules/Header1";

export default function Members() {
  return (
    <>
      <Header1
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <Section>
        <h2 className="mb-2 text-center text-4xl font-bold">
          Our team members
        </h2>
        <p className="text-center">
          Meet our team of <strong>170+</strong> AI Enthusiasts.
        </p>
        <div>TODO: MEMBERS</div>
      </Section>

      <Section>
        <h2 className="mb-8 text-center text-4xl font-bold">
          The TUM.ai leadership journey
        </h2>

        <div className="flex flex-wrap items-center justify-center">
          <div className="clip-point-down xl:clip-point-right w-full bg-white bg-gradient-to-b from-[#4f86c3] to-[#5270cb] p-8 pb-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:pb-8 xl:pr-16">
            <h3 className="text-xl font-bold">Member</h3>
            <p>Once you are accepted</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full bg-white bg-gradient-to-b from-[#5270cb] to-[#555ad4] p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Teamlead</h3>
            <p>max. for 2 semesters</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full bg-white bg-gradient-to-b from-[#555ad4] to-[#5743dc] p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Mentor</h3>
            <p>strategic advisors</p>
          </div>

          <div className="clip-enter-down xl:clip-enter-right w-full bg-white bg-gradient-to-b from-[#5743dc] to-[#5a2de5] p-8 pt-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:py-8 xl:pl-16">
            <h3 className="text-xl font-bold">President</h3>
            <p>max. for 2 semesters</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-2 text-center text-4xl font-bold">Departments</h2>
        <p className="text-center">
          All of our active members contribute to one or more of the following
          organizational departments.
        </p>
      </Section>

      <Section>
        <h2 className="mb-2 text-center text-4xl font-bold">
          Talent breeds talent
        </h2>

        <p className="mb-2 text-center">
          TUM.ai of students from various disciplines. On one hand, a lot of
          students come from technical disciplines like computer science, data
          engineering and other areas of technology. On the other hand, we also
          welcome students from non-technical backgrounds which can help us
          apply AI in their field with application knowledge.
        </p>

        <p className="text-center">
          <strong>Currently we count over 170 active members!</strong>
        </p>
      </Section>
    </>
  );
}
