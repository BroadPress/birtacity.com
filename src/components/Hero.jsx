import React from 'react'
import image1 from '../assets/Heroimage/image1.jpg'
import image2 from '../assets/Heroimage/image2.png'
import image3 from '../assets/Heroimage/image3.png'
import image4 from '../assets/Heroimage/image4.png'
import image5 from '../assets/Heroimage/image5.png'
import image6 from '../assets/Heroimage/image6.png'
import thunder from '../assets/icons/thunder.svg'
const Hero = () => {
  return (
		<div className="mt-10 flex flex-col gap-8 ">
			{/* Heading section */}
			<div className="border  gap-8 border-[#055D59] border-x-0 flex items-center text-[16px] overflow-hidden">
				<div className="flex items-center  bg-[#D6D6D6] justify-center  w-[10%] ">
					<img src={thunder} alt="" className="src" />
					<div className="  text-center font-bold text-[25px]">प्रचलित</div>
				</div>
				{/* main hero section */}
				<div className="text-[25px] ruluko-regular  text-center leading-5">
					विकासको नयाँ युगमा नेपाली खेलकुद, क्रिकेटर द्वय भट्ट र रावललाई आजीवन
					छात्रवृत्ति, नेपाली चलचित्रको
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-6">
				<div
					className="bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden flex-[2]"
					style={{ backgroundImage: `url(${image1})` }}
				>
					<div className="absolute bottom-5 left-5 px-4">
						<p className="text-[19px] text-white px-4 py-2 rounded-md ">
							अपडेट गरिएको : १ दिन अघि, खेलकुद, सुधीर नेपाल
						</p>
						<p className="text-[40px] md:text-[48px] text-white mt-2">
							किन बन्दैछ नेपाल अपराधीहरूको सुरक्षित ठाउँ
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-6 flex-1">
					<div
						className="bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden"
						style={{ backgroundImage: `url(${image2})` }}
					>
						<div className="absolute bottom-5 left-5 px-4">
							<p className="text-[19px] text-white px-4 py-2 rounded-md ">
								४ अगस्ट २०२५, पर्यटन, प्रकाश उप्रेती
							</p>
							<p className="text-[28px] md:text-[32px] text-white mt-2">
								विकासको नयाँ युगमा नेपाली खेलकुद
							</p>
						</div>
					</div>
					<div
						className="bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden"
						style={{ backgroundImage: `url(${image3})` }}
					>
						<div className="absolute bottom-5 left-5 px-4">
							<p className="text-[19px] text-white px-4 py-2 rounded-md ">
								२२ डिसेम्बर, २०२२ पर्यटन, प्रकाश उप्रेती
							</p>
							<p className="text-[28px] md:text-[36px] text-white mt-2">
								क्रिकेटर द्वय भट्ट र रावललाई आजीवन छात्रवृत्ति
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Hero footer section */}
			<div className="flex flex-col">
				<div className="py-3 px-9 text-white bg-[#7E7E7E] text-[15px] rounded-t-[8px] w-fit">
					ताजा खबर
				</div>
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-4">
					<div className="flex gap-3 items-center justify-start">
						<img src={image4} alt="" className="w-[110px] h-[107px]" />
						<p className="text-[22px]">
							गर्मी मौसममा पिउन मिल्ने उत्कृष्ट पेय पदार्थ
						</p>
					</div>
					<div className="flex gap-3 items-center justify-start">
						<img src={image5} alt="" className="w-[110px] h-[107px]" />
						<p className="text-[22px]">
							गर्मी मौसममा पिउन मिल्ने उत्कृष्ट पेय पदार्थ
						</p>
					</div>
					<div className="flex gap-3 items-center justify-start">
						<img src={image6} alt="" className="w-[110px] h-[107px]" />
						<p className="text-[22px]">
							गर्मी मौसममा पिउन मिल्ने उत्कृष्ट पेय पदार्थ
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero