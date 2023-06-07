import Image from 'next/image';

export default function Content2({ title, img, subtitle, body, bottom }) {
	return (
		<section className='py-16 md:py-16 bg-gradient-to-b from-[#151e35] to-[#211b44] text-white'>
			<div
				style={{
					maxWidth: '1600px',
				}}
				className='container space-y-16 mx-auto px-8 lg:px-16'
			>
				{title}

				<div className='h-full lg:px-16'>
					<hr className='px-4 bg-gray-700 h-[1px] border-none' />
				</div>

				<div className='grid md:grid-cols-2 gap-4 items-center'>
					<div className='space-y-4 mb-4'>
						{subtitle}

						{body}

						{bottom}
					</div>

					<div className='relative w-full h-[300px]'>
						<Image src={img} fill className='object-cover' />
					</div>
				</div>
			</div>
		</section>
	);
}
