import './App.css';
import 'flowbite';

//Component
import Header from './component/Header';
import Main from './component/Main';
import About from './component/About';
import Service from './component/Service';

import WebSite from './component/WebSite';
import Experince from './component/Experince';
import Contact from './component/Contact';

import TopButton from './ui/TopButton';
import { Footer } from './component/Footer';

import '../src/Css/Grid.css';

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<Main />
			<WebSite />
			<Experince />
			<About />
			<Service />
			<Contact />
			<Footer />
			<TopButton />
		</div>
	);
}

export default App;
