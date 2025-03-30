import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { bitter } from "../styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "./hero";
import { Organization, WithContext } from 'schema-dts';
import { 
  initiatives_collabrated_with, 
  partners_collabrated_with 
} from "data/partners";

export const metadata: Metadata = {
  title: "TUM.ai - Student Initiative focused on Artificial Intelligence",
  description:
    'TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.',
};

// JSON-LD data for SEO
const jsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TUM.ai',
  legalName: 'TUM.ai e.V.',
  alternateName: [
    'TUM.ai Student Initiative',
  ],
  description: 'TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.',
  url: 'https://www.tum-ai.com',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/TUM.ai_Logo_Blue_%26_Violet.svg',
  sameAs: [
    'https://www.linkedin.com/company/tum-ai',
    'https://www.instagram.com/tum.ai_official/',
    'https://www.facebook.com/p/Tumai-100064870068663/',
    'https://x.com/TUMai_official',
    'https://www.youtube.com/@tum.aistudentinitiative',
    'http://www.wikidata.org/entity/Q128339659',
    'https://github.com/tum-ai',
    'https://www.crunchbase.com/organization/tum-ai',
    'https://www.reddit.com/r/TUM_ai/',
    'https://www.tiktok.com/@tum.ai_',
    'https://tum-ai.podbean.com/',
    'https://theorg.com/org/tum-ai',
    'https://www.eventbrite.de/o/tumai-31793295023',
  ],
  email: 'contact@tum-ai.com',
  foundingDate: '2020',
  foundingLocation: 'Munich, Germany',
  location: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Rosenheimer Str. 116A',
      postalCode: '81669',
      addressLocality: 'Munich',
      addressCountry: 'Germany',
      contactType: 'Headquarters',
    }, {
      '@type': 'PostalAddress',
      streetAddress: 'Arcisstraße 21',
      postalCode: '80333',
      addressLocality: 'Munich',
      addressCountry: 'Germany',
      contactType: 'Registered office',
    },
  ],
  identifier: {
    '@type': 'PropertyValue',
    name: 'Register of Associations',
    value: 'VR 210726',
  },
  department: [
    {
      '@type': 'Organization',
      name: 'Venture Department',
      description: 'The Venture Department is the entrepreneurial arm of TUM.ai and organizes the AI Entrepreneurship Lab, a 14-week equity-free AI startup incubator.',
      url: 'https://www.tum-ai.com/e-lab',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'venture@tum-ai.com',
        contactType: 'Venture Department',
      },
      employee: {
        '@type': 'EmployeeRole',
        roleName: 'Head of Venture Department',
        employee: {
          '@type': 'Person',
          name: 'Laurenz Sommerlad',
          identifier: 'laurenz-sommerlad',
          email: 'laurenz.sommerlad@tum-ai.com',
          url: 'https://www.tum-ai.com/e-lab/laurenz-sommerlad',
          sameAs: [
              'https://laurenzsommerlad.com',
              'https://www.linkedin.com/in/laurenzsommerlad/',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'laurenz.sommerlad@tum-ai.com',
            contactType: 'Head of Venture Department',
          }
        },
      },
    },
    // ... other departments
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'partners@tum-ai.com',
    contactType: 'partner and sponsorship inquiries',
  },
};

export default function Index() {
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </section>
      
      <Hero />
      
      {/* Programs Section */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className={cx("text-3xl font-medium mb-16 text-center", bitter.className)}>
            Our <span className="text-purple-600">Programs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* E-Lab Card */}
            <ProgramCard
              title="AI Entrepreneurship Lab"
              icon="/assets/home_img4.jpg"
              description="14-week equity-free AI startup incubator with full support from Munich's innovation ecosystem"
              link="/e-lab"
              cta="Learn more"
              status="Applications open in August"
            />
            
            {/* AI Academy Card */}
            <ProgramCard
              title="AI Academy"
              icon="/assets/home_img1.jpg"
              description="Advanced AI workshops with hands-on coding tutorials from exciting tech companies"
              link="https://education.tum-ai.com/"
              cta="Explore education"
              status="Open for everyone"
            />
            
            {/* Makeathon Card */}
            <ProgramCard
              title="Makeathon Competitions"
              icon="/assets/home_img2.png"
              description="48-hour AI product development hackathon solving real industry challenges"
              link="https://makeathon.tum-ai.com/"
              cta="View hackathons"
              status="Stay tuned for next event"
            />
            
            {/* Industry Projects Card */}
            <ProgramCard
              title="Industry Projects"
              icon="/assets/home_img3.png"
              description="Paid student teams implementing data-driven solutions for partner companies"
              link="/industry"
              cta="Explore projects"
              status="Applications closed"
            />
          </div>
        </div>
      </Section>
      
      {/* About Section */}
      <Section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className={cx("text-3xl font-medium mb-8", bitter.className)}>
                Germany&apos;s leading<br />
                <span className="text-purple-600">AI student initiative</span>
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="font-medium text-black">
                  With over 170 active members, TUM.ai connects students and stakeholders to drive positive societal impact through AI.
                </p>
                
                <p>
                  Founded in 2020, TUM.ai thrives to deploy AI solutions into new fields and industries, creating a diverse and inclusive community of AI enthusiasts.
                </p>
                
                <p>
                  Together with our highly-talented members, we run data science projects with industry partners, organize workshops, and develop AI-powered solutions that address real-world challenges.
                </p>
                
                <p>
                  We aim to lower the entry barriers to AI creation and usage for people from every domain by establishing a platform for practical experience through diverse applied AI projects.
                </p>
              </div>
              
              <div className="mt-10">
                <Button asChild className="rounded-md">
                  <Link href="/members">Meet our Members</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/aibootcamp.jpg"
                  alt="TUM.ai members collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* For Companies Section */}
      <Section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/partners/martin_talk.jpg"
                  alt="Industry collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple-600/10"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className={cx("text-3xl font-medium mb-8", bitter.className)}>
                For <span className="text-purple-300">Companies</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl font-medium text-white">
                  Get access to our exclusive pre-selected talent pool of qualified Software/Data Engineers and AI Strategists.
                </p>
                
                <p className="text-white/80">
                  Join TUM.ai as a sponsor or cooperation partner. Engage with our community through workshops, speaker events, or as a challenge setter for our Makeathon competitions.
                </p>
                
                <p className="text-white/80">
                  Looking for affordable, high-quality AI talent? Consider our industry project format where student teams solve real-world problems for your company.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button>
                    <Link href="mailto:partners@tum-ai.com">Become a Partner</Link>
                  </Button>
                  
                  <Button asChild className="bg-white/10 hover:bg-white/20 rounded-md">
                    <Link href="/partners">View our Partners</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Partners Section */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className={cx("text-3xl font-medium mb-16 text-center", bitter.className)}>
            Our <span className="text-purple-600">Partners</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners_collabrated_with.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Initiative Partners Section */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className={cx("text-3xl font-medium mb-16 text-center", bitter.className)}>
            Partner <span className="text-purple-600">Initiatives</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {initiatives_collabrated_with.map((initiative, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={initiative.src}
                  alt={initiative.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Slack Section */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className={cx("text-3xl font-medium mb-6", bitter.className)}>
              Join our <span className="text-purple-600">Community</span>
            </h2>
            
            <p className="mb-8 text-gray-700">
              Be among the first to be informed about upcoming events, job opportunities, and workshops.
            </p>
            
            <Link 
              href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw"
              className="flex items-center gap-3 rounded-md bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition-colors"
            >
              <FontAwesomeIcon icon={faSlack} size="lg" />
              Join TUM.ai Public Slack
            </Link>
            
            <Link className="mt-4 text-sm text-purple-500 hover:underline" href="/data-privacy">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

// Program Card Component
function ProgramCard({ title, icon, description, link, cta, status }: { title: string, icon: string, description: string, link: string, cta: string, status: string }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] hover:border-purple-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
        
        <div className="mt-auto space-y-3">
          {status && (
            <div className="flex items-center">
              <span className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></span>
              <p className="text-xs font-medium text-purple-600">{status}</p>
            </div>
          )}
          
          <Link 
            href={link}
            className="inline-flex items-center text-sm font-medium text-purple-600 transition-colors hover:text-purple-800"
          >
            {cta}
            <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
