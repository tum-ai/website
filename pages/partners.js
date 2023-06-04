import Header1 from '../components/02_molecules/Header1';
import Image from 'next/image';

const purpleStyle = { color: "rgb(90, 45, 229)" }

export default function Partners() {
	return (
		<>
			<Header1
				imageSrc={'/assets/partners.jpg'}
				title='Become a partner of TUM.ai'
				subtitle="Get access to Munich's largest student talent pool of AI enthusiasts!"
			/>

      <section className="py-8 flex flex-col items-center">
        <h2 className="text-uppercase text-text text-2xl font-bold mb-8">
          Partners <span style={purpleStyle}>we have collaborated</span> with
        </h2>
        <Image alt="Partners image"/>
      </section>

      <section className="py-8 bg-background">
        <h2 className="text-uppercase text-white text-2xl font-bold mb-8">
          Building the AI ecosystem in Munich, Germany, and worldwide by connecting students, industry and academia.
        </h2>
      </section>
		</>
	);
}
