import Image from 'next/image';

export default function VerticalCards({ data }) {
	return (
		<div className='bg-gray-200'>
			<div
				style={{
					maxWidth: '1600px',
				}}
				className='p-8 lg:p-16 lg:px-60 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 m-auto bg-gray-200'
			>
				{data.map((obj) => (
					<div className='bg-white border border-gray-300 shadow hover:scale-105 hover:shadow-xl transition-all duration-200'>
						<Image src={obj['img']} width={1000} height={100} />
						<div className='p-4 text-center flex flex-col space-y-4'>
							<div className='text-xl font-semibold'>
								{obj['title']}
							</div>
							<hr />
							<div>{obj['text']}</div>
							<>{obj['body']}</>
							<div className='font-thin'>{obj['subText']}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
