import Image from 'next/image';
import styles from '../styles/02_molecules/Navbar.module.css';
import DropdownLinks from './DropdownLinks';

export default function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				<a className={styles.Logo} href='/'>
					<Image
						src={'/assets/logo_new_white_standard.png'}
						className={styles.LogoImage}
						alt='Logo'
						width={150}
						height={40}
					/>
				</a>
				<div className={styles.links}>
					<a href='https://aielab.tum-ai.com/'>AI E-Lab</a>
					<a href='https://makeathon.tum-ai.com/'>Makeathon</a>
					<a href='industry'>Industry Projects</a>
					<a href='partners'>Partners</a>
					<a href='members'>Members</a>
					<a href='https://join-us.tum-ai.com/'>join us</a>
					<DropdownLinks
						title='More TUM.ai'
						links={[
							{
								name: 'Workshops Newsroom',
								href: 'workshops',
							},
							{
								name: 'TUM.ai Blog Articles',
								href: 'blog',
							},
						]}
					/>
				</div>
				<div className={styles.contact}>
					<div>
						<button>Contact</button>
					</div>
				</div>
			</nav>
		</>
	);
}
