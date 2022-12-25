import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<nav>
				<div class='navbar'>
					<Link href='#' class='logo'>
						Logo
					</Link>
					<ul class='nav-links'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='industry'>Industry</Link>
						</li>
						<li>
							<Link href='partners'>Partners</Link>
						</li>
						<li>
							<Link href='members'>Members</Link>
						</li>
						<li>
							<Link href='workshops'>Workshops & Events</Link>
						</li>
						<li>
							<Link href='blog'>Blog</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
