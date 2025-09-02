import React from 'react'
import Hero from '../homepage/Hero';
import Firstsection from '../homepage/Firstsection'
import Secondsection from '../homepage/Secondsection'
import Thirdsection from '../homepage/Thirdsection'
import Prachalitsection from '../homepage/Prachalitsection';
import Samacharsection from '../homepage/Samacharsection';



const Homepage = () => {
  return (
	  <div className="  ">
          <Hero />
          <Firstsection/>
          <Secondsection />
          <Thirdsection />
      <Prachalitsection />
      <Samacharsection/>
		</div>
	);
}

export default Homepage;
