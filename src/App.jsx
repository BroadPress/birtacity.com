
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Firstsection from './components/Firstsection';

function App() {
 

  return (
		<>
			<div className="px-10 py-8 bg-[#F1F1F1]">
				<Navbar />
        <Hero />
        <Firstsection/>
			</div>
		</>
	);
}

export default App
