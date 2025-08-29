import React from 'react'
import image1 from '../assets/Heroimage/image1.jpg'
import thunder from '../assets/icons/thunder.svg'
const Hero = () => {
  return (
		<div className="mt-10 flex flex-col gap-8">
			<div className="border  gap-8 border-[#055D59] border-x-0 flex items-center text-[16px] overflow-hidden">
				<div className="flex items-center bg-[#D6D6D6] justify-center gap-3 w-[10%] ">
					<img src={thunder} alt="" className="src" />
					<div className="  text-center px-4 py-2 text-[30px]">प्रचलित</div>
				</div>

				<div className="text-[27px]">
					विकासको नयाँ युगमा नेपाली खेलकुद, क्रिकेटर द्वय भट्ट र रावललाई आजीवन
					छात्रवृत्ति, नेपाली चलचित्रको
				</div>
			</div>
			<div
				className="h-screen bg-cover bg-center"
				style={{ backgroundImage: `url(${image1})` }}
			></div>
		</div>
	);
}

export default Hero