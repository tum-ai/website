import Image from 'next/image';

export default function Content1({ title, img, subSection, text }) {
	return (
		<div
			className='p-8 lg:p-16 bg-gray-100'
			style={{
				maxWidth: '1600px',
			}}
		>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
				<div className='lg:col-span-2 text-4xl font-bold'>{title}</div>
				<div className='lg:px-4 flex flex-col items-center space-y-8'>
					<Image src={img} width={700} height={100} />
					<div className='p-8 bg-white text-lg'>{subSection}</div>
				</div>
				<div>{text}</div>
			</div>
		</div>
	);
}
