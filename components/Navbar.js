export default function Navbar() {
	return (
		<>
			<nav
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					gap: 75,
					backgroundColor: '#171E36',
					color: 'white',
					padding: 20,
					fontSize: 15,
				}}
			>
				<a href='#' class='logo'>
					Logo
				</a>
				<div
					style={{
						display: 'flex',
						alignContent: 'center',
						gap: '20px',
					}}
				>
					<a href='/'>Home</a>
					<a href='industry'>Industry</a>
					<a href='partners'>Partners</a>
					<a href='members'>Members</a>
					<a href='workshops'>Workshops & Events</a>
					<a href='blog'>Blog</a>
				</div>
				<div
					style={{
						display: 'flex',
						gap: '10px',
					}}
				>
					<div>
						<button
							style={{
								borderRadius: '1000px',
								border: 'none',
								cursor: 'pointer',
								backgroundColor: '#5B2CE5',
								padding: '5px 10px',
								color: 'white',
								fontSize: 15,
							}}
						>
							contact
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
