import Footer from '../components/02_molecules/Footer';
import Navbar from '../components/02_molecules/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
