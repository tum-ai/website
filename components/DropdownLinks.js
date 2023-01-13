import { useState } from 'react';
import styles from '../styles/01_atoms/DropdownLinks.module.css';

export default function DropdownLinks({ title, links }) {
	const [active, setActive] = useState(false);
	return (
		<div className={styles.dropdown}>
			<div
				onClick={() => {
					setActive(!active);
				}}
				className={styles.dropbtn}
			>
				{title}
			</div>
			{active && (
				<div className={styles.dropdown_content}>
					{links.map((link, i) => (
						<a key={i} href={link.href}>
							{link.name}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
