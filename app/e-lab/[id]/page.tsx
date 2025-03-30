import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {alumni, Person, team} from "@data/e-lab";
import Link from "next/link";
import NotFound from "next/dist/client/components/not-found-error";
import Section from "@components/ui/Section";
import Image from "next/image";
import {ProfilePage, WithContext} from "schema-dts";
import SocialMediaLinks from "@components/SocialMediaLinks";

export function generateStaticParams() {
    return team.map((person) => ({
        id: person.id,
    })).concat(alumni.map((person) => ({id: person.id})));
}

export function generateMetadata({params: {id}}: { params: { id: string } }) {
    let person = team.find((person: Person) => id === person.id);
    if(!person) {
        person = alumni.find((person: Person) => id === person.id);
    }
    const name = person?.firstName + " " + person?.lastName;
    return {
        title: name + " - AI E-LAB | TUM.ai",
        description:
            "Meet " + name + " from the AI Entrepreneurship Lab. Join us if you are up for a 3-month founding journey designed to ignite your innovative spirit and equip you with the relevant know-how to build your own AI startup in Munich.",
    };
}

export default function Page({params: {id}}: { params: { id: string } }) {
    let person = team.find((person: Person) => id === person.id);
    if (!person) {
        person = alumni.find((person: Person) => id === person.id);
    }
    if (!person) {
        return <NotFound />;
    }

    const jsonLd: WithContext<ProfilePage> = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            identifier: person.id,
            name: person.firstName + ' ' + person.lastName,
            givenName: person.firstName,
            familyName: person.lastName,
            description: person.description,
            image: 'https://www.tum-ai.com' + person.imgSrc,
            email: person.socialMedia.email,
            worksFor: {
                '@type': 'EmployeeRole',
                roleName: person.role,
                worksFor: {
                    '@type': 'Organization',
                    name: 'Venture Department',
                    alternateName: 'AI Entrepreneurship Lab',
                    url: 'https://www.tum-ai.com/e-lab',
                },
            },
            memberOf: {
                '@type': 'Organization',
                name: 'TUM.ai',
                alternateName: 'TUM.ai Student Initiative',
                legalName: 'TUM.ai e.V.',
                url: 'https://www.tum-ai.com',
            },
            url: 'https://www.tum-ai.com/e-lab/' + person.id,
            sameAs: [
                person.socialMedia.linkedin,
                person.socialMedia.x ? person.socialMedia.x : "",
                person.socialMedia.instagram ? person.socialMedia.instagram : "",
                person.socialMedia.youtube ? person.socialMedia.youtube : "",
                person.socialMedia.website ? person.socialMedia.website : "",
            ],
        },
    }

    return(
        <div>
            <section>
                {/* Add JSON-LD to your page */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
            </section>
            <Section className="bg-purple-950 text-white">
                <div>
                    <div
                        className="mt-4 sm:mt-0 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <div className="lg:max-w-lg lg:self-end">
                            <Link href={"/e-lab/team"}>
                                <button
                                    type="button"
                                    className="flex flex-row items-center text-center w-fit pr-2 h-7 bg-orange-500 border border-transparent rounded-md text-base font-medium text-white hover:bg-orange-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-500"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft}
                                                     size="lg"
                                                     className="w-5 h-5 text-white m-2"
                                    />
                                    <p>Back</p>
                                </button>
                            </Link>
                            <div className="mt-4">
                                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    {person.firstName} {person.lastName}
                                </h1>
                            </div>

                            <section aria-labelledby="information-heading" className="mt-4">
                                <h2 id="information-heading" className="sr-only">
                                    Role
                                </h2>

                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <p className="text-xl sm:text-2xl font-semibold bg-linear-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                                        {person?.role}
                                    </p>

                                <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300 mt-4 sm:mt-0">
                                    <h2 className="sr-only">Social Media Links</h2>
                                    <div className="flex items-center">
                                        <div className="space-x-4">
                                            <SocialMediaLinks socialMedia={person.socialMedia} iconClassNames={"duration-500 hover:text-yellow-500"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div className="mt-4 space-y-6">
                                    <p className="text-base whitespace-pre-wrap">
                                        {person?.description}
                                    </p>
                                </div>
                            </section>
                        </div>

                    {/* Person image */}
                    <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                            <Image
                                src={person?.imgSrc}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={person?.imgAlt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden mt-4 max-w-2xl mx-auto lg:max-w-7xl">
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                            <h3 className="text-m font-medium text-gray-900">
                                {person.firstName} {person.lastName}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {person.role}
                            </p>
                        </div>
                        <div className="space-x-4 mt-2 md:mt-0">
                            <SocialMediaLinks socialMedia={person.socialMedia} iconClassNames={"text-black duration-500 hover:text-yellow-500"} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        </div>
    );
}

