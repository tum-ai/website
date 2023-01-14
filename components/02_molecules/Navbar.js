import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../../styles/02_molecules/Navbar.module.css';
import DropdownLinks from '../01_atoms/DropdownLinks';

export default function Navbar() {
	const [contactActive, setContactActive] = useState(false);
	const [mobileMenuActive, setMobileMenuActive] = useState(false);

	useEffect(() => {
		function handleResize() {
			const menu_button = document.querySelector(
				`.${styles.menu_button}`
			);
			const menu_button_display =
				getComputedStyle(menu_button).getPropertyValue('display');
			if (menu_button_display == 'none') {
				setMobileMenuActive(true);
			} else {
				setMobileMenuActive(false);
			}
		}

		window.addEventListener('resize', handleResize);
		handleResize();
	}, []);

	return (
		<>
			{contactActive && (
				<>
					<div
						onClick={() => {
							setContactActive(false);
						}}
						className={styles.popup_wrapper}
					></div>
					<div className={styles.popup}>
						<button
							onClick={() => {
								setContactActive(false);
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
				<div className={styles.navbar_container}>
					<a href='/' className={styles.links_logo}>
						<Image
							src={'/assets/logo_new_white_standard.png'}
							alt='Logo'
							fill
							objectFit='contain'
						/>
					</a>
					{mobileMenuActive && (
						<div className={styles.navbar_responsive}>
							<div className={styles.links}>
								<a href='https://aielab.tum-ai.com/'>
									AI E-Lab
								</a>
								<a href='https://makeathon.tum-ai.com/'>
									Makeathon
								</a>
								<a href='/industry'>Industry Projects</a>
								<a href='/partners'>Partners</a>
								<a href='/members'>Members</a>
								<a href='https://join-us.tum-ai.com/'>
									Join us
								</a>
								<DropdownLinks
									title={
										<div
											style={{
												display: 'flex',
												position: 'relative',
												alignItems: 'center',
												gap: '.3rem',
											}}
										>
											<div>More TUM.ai</div>
											<div className={styles.arrow}>
												<Image
													src={'/assets/arrow.svg'}
													alt='icon'
													width={20}
													height={20}
												/>
											</div>
										</div>
									}
									links={[
										{
											name: 'Workshops Newsroom',
											href: '/workshops',
										},
										{
											name: 'TUM.ai Blog Articles',
											href: '/blog',
										},
									]}
								/>
							</div>
							<div className={styles.contact}>
								<a href='https://www.linkedin.com/company/tum-ai/'>
									<Image
										src={'/assets/linkedin.svg'}
										alt='icon'
										width={20}
										height={20}
									/>
								</a>
								<a href='https://www.instagram.com/tum.ai_official/?hl=de'>
									<Image
										src={'/assets/insta.svg'}
										alt='icon'
										width={20}
										height={20}
									/>
								</a>
								<a href='https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw'>
									<Image
										src={'/assets/slack.svg'}
										alt='icon'
										width={40}
										height={40}
									/>
								</a>
								<button
									onClick={() => {
										setContactActive(true);
									}}
								>
									Contact
								</button>
							</div>
						</div>
					)}
					<div>
						<button
							id='menu_button'
							onClick={() => {
								setMobileMenuActive(!mobileMenuActive);
							}}
							className={styles.menu_button}
						>
							<div className={styles.arrow}>
								<Image
									src={'/assets/burger_menu.svg'}
									alt='icon'
									width={20}
									height={20}
								/>
							</div>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
