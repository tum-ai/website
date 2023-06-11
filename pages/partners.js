import Header1 from "../components/02_molecules/Header1";
// import PartnersRow from '../components/01_atoms/PartnersRow'

const purpleStyle = { color: "rgb(90, 45, 229)" };

export default function Partners() {
  return (
    <>
      <Header1
        imageSrc={"/assets/partners.jpg"}
        title="Become a partner of TUM.ai"
        subtitle="Get access to Munich's largest student talent pool of AI enthusiasts!"
      />
      <div
        className="text-uppercase text-center"
        style={{
          margin: "0px",
          padding: "30px",
          color: "#000000",
          height: "97px",
          marginTop: "27px",
          fontSize: "32px",
          marginBottom: "-8px",
          fontWeight: "bold",
          paddingTop: "37px",
          textAlign: "center",
        }}
      >
        Partners <span style={purpleStyle}>we have collaborated</span> with
      </div>
      {/*<PartnersRow imageSrc={'/assets/partners_sponsors/Microsoft_Logo.png'} companyName={'Microsoft'} companyLink={'https://www.microsoft.com'}/>*/}
      {/*<PartnersRow imageSrc={'/assets/partners_sponsors/google_logo.png'} companyName={'Google'} />*/}
      {/*<PartnersRow imageSrc={'/assets/partners_sponsors/applied-ai.svg'} companyName={'appliedAI'} />*/}
      {/*<PartnersRow imageSrc={'/assets/partners_sponsors/UnternehmerTUM.webp'} companyName={'UnternehmerTUM'} />*/}
    </>
  );
}
