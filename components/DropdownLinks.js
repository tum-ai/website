import styles from '../styles/01_atoms/DropdownLinks.module.css';

export default function DropdownLinks({ title, links }) {
	return (
		<div className={styles.dropdown}>
			<div className={styles.dropbtn}>{title}</div>
			<div className={styles.dropdown_content}>
				{links.map((link) => (
					<a href={link.href}>{link.name}</a>
				))}
			</div>
		</div>
	);
}
