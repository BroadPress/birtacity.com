import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import image1 from "../assets/Homepage/Sectionfirstimage/imag1.png";
import image2 from "../assets/Homepage/Sectionfirstimage/image2.png";
import image3 from "../assets/Homepage/Sectionfirstimage/image3.png";
const Firstsection = () => {
  return (
		<div className="flex flex-col gap-8 mt-10">
			<div className="flex items-center justify-between">
				<div className="font-bold text-lg">पर्यटन</div>
				<div className="flex gap-3">
					<p className='text-sm'>सबै हेर्नुहोस्</p>
					<img src={arrow} alt="" className="src" />
				</div>
			</div>
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-13">
				<div className="flex flex-col gap-4">
					<img src={image1} alt="" className="aspect-video rounded-[20px]" />
					<div className="flex gap-2">
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							सेलेब्रेटीहरू
						</div>
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							अहिले चर्चामा
						</div>
					</div>
					<p className="text-md font-bold">
						पहिले र पछि – लेना मोरोको मनमोहक रूपान्तरण
					</p>
					<p className="text-[14px]">
						फेब्रुअरी २१ | <span className="font-bold">लेखिका:</span>लेखिका:
						ओलिभिया कार्टर
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<img src={image2} alt="" className="aspect-video rounded-[20px]" />
					<div className="flex gap-2">
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							स्वास्थ्य
						</div>
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							अहिले चर्चामा
						</div>
					</div>
					<p className="text-md font-bold">
						ऊर्जा र आत्मविश्वाससहित उमेर बढाउँदै जाने रहस्यहरू
					</p>
					<p className="text-[14px]">
						फेब्रुअरी २१ | <span className="font-bold">लेखिका:</span>लेखिका:
						ओलिभिया कार्टर
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<img src={image3} alt="" className="aspect-video rounded-[20px]" />
					<div className="flex gap-2">
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							स्वास्थ्य
						</div>
						<div className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
							अहिले चर्चामा
						</div>
					</div>
					<p className="text-md font-bold">
						रेट्रो अन व्हिल्स – भिन्टेज क्याम्परहरूको सौन्दर्यपूर्ण पुनरागमन
					</p>
					<p className="text-[14px]">
						फेब्रुअरी २१ | <span className="font-bold">लेखिका:</span>लेखिका:
						ओलिभिया कार्टर
					</p>
				</div>
			</div>
		</div>
	);
}

export default Firstsection