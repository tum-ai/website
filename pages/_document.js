import { Html, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Document() {
	return (
		<Html lang='en'>
			<body>
				<Navbar />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
