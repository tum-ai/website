import Image from 'next/image';
import Button from '../../components/Button';
import Content1 from '../../components/Content1';
import Content2 from '../../components/Content2';
import VerticalCards from '../../components/VerticalCards';
import Header from './components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<div className='bg-primary-500 h-3'></div>
			<VerticalCards
				data={[
					{
						img: '/assets/home_img1.jpg',
						title: 'AI Academy and educational offers',
						text: 'a series of advanced AI workshops, featuring hands-on coding tutorials, provided by exciting tech companies, open for everyone!',
						subText:
							'sponsored online course certificates and company visits are exclusive to TUM.ai members',
						body: (
							<div className='flex flex-col items-center space-y-2 w-fit m-auto'>
								<Button
									link
									href={'https://education.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									link
									href={
										'https://www.eventbrite.de/o/tumai-31793295023'
									}
									className='bg-primary-500'
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img2.png',
						title: 'Makeathon Competitions',
						text: 'AI product development Hackathon, 48 hours to solve challenges by our sponsors, open for tech and business students, online/in-person hybrid',
						subText: 'applications closed, finished',
						body: (
							<div className='flex flex-col items-center space-y-2 w-fit m-auto'>
								<Button
									link
									href={'https://makeathon.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									link
									href={
										'https://makeathon23.tum-ai.com/apply'
									}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img3.png',
						title: 'Industry Project Cooperations',
						text: 'Teams of 4x paid working students, deployed to implement data-driven solutions and consult partner companies, over 10 weeks time-frame',
						subText: 'applications closed, currently ongoing',
						body: (
							<div className='flex flex-col items-center space-y-2 w-fit m-auto'>
								<Button
									link
									href={
										'https://www.tum-ai.com/industry-projects.html'
									}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									link
									href={'https://industry.tum-ai.com/apply'}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img4.jpg',
						title: 'AI E-Lab Entrepreneurship',
						text: `StartUp incubation program for students who are interested in founding AI Ventures, access TUM.ai's network to boost your vision`,
						subText: 'applications closed, currently ongoing',
						body: (
							<div className='flex flex-col items-center space-y-2 w-fit m-auto'>
								<Button
									link
									href={'https://aielab.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									link
									href={'https://aielab.tum-ai.com/'}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
				]}
			/>
			<Content1
				title={
					<div className=''>
						With over 170 active members, TUM.ai is{' '}
						<span className='text-primary-500'>{`Germany's leading AI student initiative`}</span>{' '}
						, located in Munich.
					</div>
				}
				img={'/assets/home_img5.jpeg'}
				subSection={
					<div className='flex flex-col space-y-2 items-center'>
						<div className='text-center'>
							<div className='text-primary-500 font-bold'>
								Interested in joining TUM.ai?{' '}
							</div>
							Visit our Transparency Page to learn more!
							(application phase ended for this semester)
						</div>
						<div className='flex items-center flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 w-fit m-auto'>
							<Button
								link
								href={'https://www.tum-ai.com/members.html'}
								className='bg-gray-500'
							>
								Meet our Members
							</Button>
							<Button
								link
								href={'https://join-us.tum-ai.com/'}
								className='bg-primary-500'
							>
								Learn more!
							</Button>
						</div>
					</div>
				}
				text={
					<div className='space-y-4'>
						<div className='text-xl'>
							"Since founded in 2020,{' '}
							<span className='text-primary-500 font-bold'>
								TUM.ai's Vision
							</span>{' '}
							is to connect students and all relevant stakeholders
							to facilitate the application of AI across domains
							and drive positive societal impact through
							inter-disciplinary projects."
						</div>
						<div>
							Together with our highly-talented members, we run
							data science projects with industry, startup & VC
							partners, organize workshops and our "Makeathon"
							AI-product development competitions. We thrive to
							deploy AI solutions into new fields and industries!
							Do not hesitate to reach out to us, we are looking
							forward to ambitious collaborations.{' '}
						</div>
						<div>
							Under the Motto "
							<span className='text-primary-500 font-bold'>
								Connect-Execute-Learn
							</span>
							" we aim at lowering the entry-bar to AI-creation
							and -usage for people of every domain by
							establishing a platform to make practical experience
							through a diverse set of applied AI projects. We
							therefore educate and connect students from diverse
							backgrounds to incentivize new interdisciplinary AI
							projects and push the creation and usage of
							applicable and safe AI in all domains.{' '}
						</div>
					</div>
				}
			/>
			<div className='w-full h-[450px] relative bg-blend-overlay'>
				<div className='absolute z-10 h-full w-full bg-primary-500 opacity-20'></div>
				<Image
					src={'/assets/aibootcamp.jpg'}
					alt=''
					fill
					className='object-cover'
				/>
			</div>
			<Content2
				img={'/assets/martin_talk.jpg'}
				title={
					<h2 className='text-uppercase text-white text-4xl font-bold text-center'>
						We connect{' '}
						<span className='text-[#a450e6]'>stellar</span> Students
						and Companies
					</h2>
				}
				subtitle={
					<p className='font-bold text-xl text-center lg:text-left'>
						Get access to our{' '}
						<span className='text-[#a450e6]'>
							exclusive pre-selected talent pool
						</span>{' '}
						of highly qualified Software/Data Engineers and AI
						Strategists.
					</p>
				}
				body={
					<p>
						Join TUM.ai as a sponsor or cooperation partner of our
						non-profit student initiative. We are excited about
						engaging with your company via workshops, speaker events
						or as a challenge setter for our Makeathon competitions.
						If you are looking for a high-quality, but affordable
						team of Data Scientists and AI Strategists to solve
						problems for your firm, consider becoming a cooperation
						partner for TUM.ai's industry project format. (Student
						Data Consultancy)
					</p>
				}
				bottom={
					<div className='flex flex-col items-start space-y-4 lg:items-center lg:flex-row lg:space-x-2 lg:space-y-0 w-fit'>
						<Button
							link
							href={'https://www.tum-ai.com/forPartners.html'}
							className='bg-gray-500'
						>
							Partner's of TUM.ai
						</Button>
						<Button
							link
							href={'https://join-us.tum-ai.com/'}
							className='bg-primary-500'
						>
							Apply as a partner
						</Button>
					</div>
				}
			/>
			{/* <section className='py-16 md:py-16 bg-gradient-to-b from-[#151e35] to-[#211b44] text-white'>
				<div
					style={{
						maxWidth: '1600px',
					}}
					className='container space-y-16 mx-auto px-8 lg:px-16'
				>
					<h2 className='text-uppercase text-white text-4xl font-bold text-center'>
						We connect{' '}
						<span className='text-[#a450e6]'>stellar</span> Students
						and Companies
					</h2>

					<div className='h-full lg:px-16'>
						<hr className='px-4 bg-gray-700 h-[1px] border-none' />
					</div>

					<div className='grid md:grid-cols-2 gap-4 items-center'>
						<div className='space-y-4 mb-4'>
							<p className='font-bold text-xl text-center lg:text-left'>
								Get access to our{' '}
								<span className='text-[#a450e6]'>
									exclusive pre-selected talent pool
								</span>{' '}
								of highly qualified Software/Data Engineers and
								AI Strategists.
							</p>

							<p>
								Join TUM.ai as a sponsor or cooperation partner
								of our non-profit student initiative. We are
								excited about engaging with your company via
								workshops, speaker events or as a challenge
								setter for our Makeathon competitions. If you
								are looking for a high-quality, but affordable
								team of Data Scientists and AI Strategists to
								solve problems for your firm, consider becoming
								a cooperation partner for TUM.ai's industry
								project format. (Student Data Consultancy)
							</p>

							<div className='flex flex-col items-start space-y-4 lg:items-center lg:flex-row lg:space-x-2 lg:space-y-0 w-fit'>
								<Button
									link
									href={
										'https://www.tum-ai.com/forPartners.html'
									}
									className='bg-gray-500'
								>
									Partner's of TUM.ai
								</Button>
								<Button
									link
									href={'https://join-us.tum-ai.com/'}
									className='bg-primary-500'
								>
									Apply as a partner
								</Button>
							</div>
						</div>

						<div className='relative w-full h-[300px]'>
							<Image
								src='/assets/martin_talk.jpg'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>
			</section> */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}
