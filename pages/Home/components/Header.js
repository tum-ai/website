import Image from 'next/image';
import Button from '../../../components/Button';

export default function Header() {
	return (
		<div className='py-16 px-8 bg-primary flex'>
			<div className='m-auto lg:inline-block space-y-8'>
				<Image
					src={'/assets/logo_new_white_standard.png'}
					alt='Logo'
					width={450}
					height={100}
				/>
				<div className='w-fit m-auto flex flex-col items-center justify-center lg:space-x-4 lg:space-y-0 space-y-4 lg:flex-row'>
					<Button
						href={'https://www.tum-ai.com/forPartners.html'}
						className='bg-primary-500'
					>
						Become a Partner
					</Button>
					<Button
						href={'https://join-us.tum-ai.com/'}
						className='bg-primary-500'
					>
						Become a Member
					</Button>
				</div>
			</div>
		</div>
	);
}
