import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/02_molecules/Navbar.module.css';
import DropdownLinks from './DropdownLinks';

export default function Navbar() {
	const [active, setActive] = useState(false);
	return (
		<>
			{active && (
				<>
					<div
						onClick={() => {
							setActive(false);
						}}
						className={styles.popup_wrapper}
					></div>
					<div className={styles.popup}>
						<button
							onClick={() => {
								setActive(false);
							}}
							className={styles.popup_close}
						>
							x
						</button>
						<div className={styles.popup_title}>
							Let's <span>connect</span>!
						</div>
						<hr className={styles.popup_hr} />
						<div className={styles.popup_body}>
							<div className={styles.popup_body_left}>
								<div className={styles.popup_body_left_image}>
									<Image
										src={
											'/assets/logo_new_white_standard.png'
										}
										alt='Logo'
										fill
										objectFit='contain'
									/>
								</div>
								<div>
									<div>
										<b>TUM.ai Student Initiative</b>
									</div>
									<div>Arcisstraße 21.</div>
									<div>80333 Munich</div>
								</div>
							</div>
							<div className={styles.popup_body_right}>
								<div className={styles.popup_body_right_email}>
									partners@tum-ai.com
								</div>
								<div>
									If you are interested in partnering with
									TUM.ai as a sponsor,{' '}
									<b>
										Makeathon challenge-setter, Industry
										project partner, Workshop host
									</b>
									, etc. please reach out to our "Partners &
									Sponsors" department.{' '}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			<nav className={styles.navbar}>
				<a href='/' className={styles.links_logo}>
					<Image
						src={'/assets/logo_new_white_standard.png'}
						alt='Logo'
						fill
						objectFit='contain'
					/>
				</a>
				<div className={styles.links}>
					<a href='https://aielab.tum-ai.com/'>AI E-Lab</a>
					<a href='https://makeathon.tum-ai.com/'>Makeathon</a>
					<a href='industry'>Industry Projects</a>
					<a href='partners'>Partners</a>
					<a href='members'>Members</a>
					<a href='https://join-us.tum-ai.com/'>Join us</a>
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
					<button
						onClick={() => {
							setActive(true);
						}}
					>
						Contact
					</button>
				</div>
			</nav>
		</>
	);
}
