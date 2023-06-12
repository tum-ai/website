import Header1 from "../components/02_molecules/Header1";

export default function Members() {
  return (
    <>
      <Header1
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <section className="container mx-auto p-8">
        <h2 className="mb-2 text-center text-4xl font-bold">
          Our team members
        </h2>
        <p className="text-center">
          Meet our team of <bold>170+</bold> AI Enthusiasts.
        </p>
        <div>TODO: MEMBERS</div>
      </section>

      <section className="bg-gradient-to-b from-primary-900 to-primary-950 p-8 text-white">
        <h2 className="mb-8 text-center text-4xl font-bold">
          The TUM.ai leadership journey
        </h2>

        <div className="flex items-center justify-center gap-4">
          <div className="rounded bg-white p-8 text-primary-500">
            <h3 className="text-xl font-bold">Member</h3>
            <p>Once you are accepted</p>
          </div>

          <div className="rounded bg-white p-8 text-primary-500">
            <h3 className="text-xl font-bold">Teamlead</h3>
            <p>max. for 2 semesters</p>
          </div>

          <div className="rounded bg-white p-8 text-primary-500">
            <h3 className="text-xl font-bold">Mentor</h3>
            <p>strategic advisors</p>
          </div>

          <div className="rounded bg-white p-8 text-primary-500">
            <h3 className="text-xl font-bold">President</h3>
            <p>max. for 2 semesters</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-8 text-center ">
        <h2 className="mb-2 text-4xl font-bold">Departments</h2>
        <p>
          All of our active members contribute to one or more of the following
          organizational departments.
        </p>
      </section>

      <section className="container mx-auto p-8 text-center">
        <h2 className="mb-2 text-center text-4xl font-bold">
          Talent breeds talent
        </h2>

        <p className="mb-2">
          TUM.ai consists of students from various disciplines. On one hand, a
          lot of students come from technical disciplines like computer science,
          data engineering and other areas of technology. On the other hand, we
          also welcome students from non-technical backgrounds which can help us
          apply AI in their field with application knowledge.
        </p>

        <strong>Currently we count over 170 active members!</strong>
      </section>
    </>
  );
}
