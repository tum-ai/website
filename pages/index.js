import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className='py-20 px-8 bg-primary flex'>
				<div className='m-auto inline-block space-y-8'>
					<Image
						src={'/assets/logo_new_white_standard.png'}
						alt='Logo'
						width={450}
						height={100}
					/>
					<div className='w-full flex justify-center space-x-4'>
						<button className='bg-primary-500 rounded-full px-4 py-1 text-white'>
							Become a Partner
						</button>
						<button className='bg-primary-500 rounded-full px-4 py-1 text-white'>
							Become a Member
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
