import Image from 'next/image';
import styles from '../styles/02_molecules/Navbar.module.css';

export default function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				<a className={styles.Logo} href='.'>
					<Image
						src={'/assets/logo_new_white_standard.png'}
						className={styles.LogoImage}
						alt='Logo'
						layout={'intrinsic'}
						objectFit='contain'
						width={150}
						height={40}
					/>
				</a>
				<div
					style={{
						display: 'flex',
						alignContent: 'center',
						gap: '20px',
						color: 'white',
					}}
				>
					<a href='https://aielab.tum-ai.com/'>AI E-Lab</a>
					<a href='https://makeathon.tum-ai.com/'>Makeathon</a>
					<a href='industry'>Industry Projects</a>
					<a href='partners'>Partners</a>
					<a href='members'>Members</a>
					<a href='https://join-us.tum-ai.com/'>join us</a>
					<div className={styles.dropdown}>
						<div className={styles.dropbtn}>More TUM.ai</div>
						<div className={styles.dropdown_content}>
							<a href='workshops'>Workshops Newsroom</a>
							<a href='blog'>TUM.ai Blog Articles</a>
						</div>
					</div>
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
