
import reactLogo from './assets/react.svg'
import Navbar from './homepage/Navbar'
import Hero from './homepage/Hero'
import Firstsection from './homepage/Firstsection';
import Secondsection from './homepage/Secondsection';

function App() {
 

  return (
		<>
			<div className="px-10 py-8 bg-[#F1F1F1]">
				<Navbar />
        <Hero />
			  <Firstsection />
			  <Secondsection/>
			</div>
		</>
	);
}

export default App
