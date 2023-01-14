import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/02_molecules/Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.body_left}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '.3rem',
						}}
					>
						<div>
							<Link href='https://www.instagram.com/tum.ai_official/?hl=de'>
								<Image
									src={'/assets/insta.svg'}
									alt='icon'
									width={20}
									height={20}
								/>
							</Link>
						</div>
						<div>Follow us on Instagram</div>
						<div className={styles.small_text}>
							An exlusive look behind the scenes!
						</div>
					</div>
				</div>
				<div className={styles.body_right}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '.3rem',
						}}
					>
						<div>
							<Link href='https://www.linkedin.com/company/tum-ai/'>
								<Image
									src={'/assets/linkedin.svg'}
									alt='icon'
									width={20}
									height={20}
								/>
							</Link>
						</div>
						<div>Follow us on LinkedIn</div>
						<div className={styles.small_text}>
							Stay up to date with our events!
						</div>
					</div>
				</div>
				<div className={styles.body_info}>
					<div className={styles.body_info_links}>
						<a href='industry'>Contact</a>
						<a href='partners'>Imprint</a>
						<a href='members'>Terms & Security</a>
						<a href='https://join-us.tum-ai.com/'>Website Admin</a>
					</div>
					<br />
					<div className={styles.body_info_text}>
						TUM.ai © 2022 -{' '}
						<span
							style={{
								color: '#5B2CE5',
							}}
						>
							Website by
						</span>{' '}
						<Link href='https://www.linkedin.com/in/stefanrmmr/'>
							Stefan Rummer
						</Link>{' '}
						🤙🏼
					</div>
					<div className={styles.body_info_text}>
						<span
							style={{
								color: '#5B2CE5',
							}}
						>
							Design & UX
						</span>{' '}
						by{' '}
						<Link href='https://www.linkedin.com/in/stefanrmmr/'>
							Nils Jacobsen
						</Link>{' '}
						&{' '}
						<Link href='https://www.linkedin.com/in/stefanrmmr/'>
							Ramona Dombetzki
						</Link>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
