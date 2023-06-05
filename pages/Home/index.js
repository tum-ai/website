import Button from '../../components/Button';
import Content1 from '../../components/Content1';
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
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://education.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
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
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://makeathon.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
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
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={
										'https://www.tum-ai.com/industry-projects.html'
									}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
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
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://aielab.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
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
						<div className='flex flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 w-fit m-auto'>
							<Button
								href={'https://www.tum-ai.com/members.html'}
								className='bg-gray-500'
							>
								Meet our Members
							</Button>
							<Button
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
		</>
	);
}
