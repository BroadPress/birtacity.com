import React from 'react'
import image1 from '../assets/Sectionsecond/image1.png'
import image2 from '../assets/Sectionsecond/image2.png'
const Secondsection = () => {
  return (
		<div className="mt-10">
			<div className="flex gap-6">
				<div className=" flex  flex-col gap-6 border border-t-black border-x-0 border-b-0 py-6 w-[75%]">
					<div className="font-bold text-lg">खेलकुदसम्बन्धी समाचार</div>
					<div className="flex gap-6">
						<div className="flex flex-col gap-6  w-[30%]">
							<div className="flex flex-col gap-4">
								<div className=" flex flex-col gap-3">
									<p className="font-bold text-md">
										विकासको नयाँ युगमा नेपाली खेलकुद
									</p>
									<p className="text-sm">
										आधुनिक प्रविधिको प्रयोगले नेपाली खेलाडीहरूको शारीरिक र
										मानसिक तयारीमा ठूलो परिवर्तन ल्याएको छ। फिटनेस ट्रयाकर, हृदय
										गति मापन गर्ने यन्त्रहरू प्रयोग गरेर खेलाडीको स्वास्थ्य
										अवस्था निरन्तर ट्र्याक गर्न सकिन्छ।
									</p>
								</div>
								<div className=" flex flex-col gap-3">
									<p className="font-bold text-md">
										क्रिकेटर द्वय भट्ट र रावललाई आजीवन छात्रवृत्ति
									</p>
									<p className="text-sm">
										क्रिकेट नगरीका रूपमा परिचित धनगढीमा अवस्थित एसपीए कलेजले
										सुदूरपश्चिमका गौरवशाली युवा क्रिकेटरहरू सचिन भट्ट र सुशील
										रावललाई आजीवन छात्रवृत्ति र नगदसहित सम्मान गरेको छ।
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-bold text-md">
										ओलम्पिक खेलहरूमा नेपालको सहभागिता र सम्भावना
									</p>
									<p className="text-sm">
										ओलम्पिक खेलहरू विश्वका सबैभन्दा प्रतिष्ठित खेल प्रतियोगिता
										हुन् जहाँ प्रत्येक राष्ट्रका उत्कृष्ट खेलाडीहरू भेला भएर
										राष्ट्रिय गौरवका लागि प्रतिस्पर्धा गर्दछन्। नेपालको खेलकुद
										क्षेत्रमा
									</p>
								</div>
							</div>
						</div>
						{/* Middle Image */}
						<div className="flex flex-col gap-4 w-[70%]">
							<img
								src={image1}
								alt="Nepali sports"
								className="aspect-video rounded-[20px] object-cover"
							/>
							<p className="text-end text-xs">
								LOIC VENANCE/AFP via Getty images
							</p>
							<p className="text-md font-bold">
								विकासको नयाँ युगमा नेपाली खेलकुद
							</p>
						</div>
					</div>
				</div>

				{/* Third Image */}
				<div
					className=" w-[30%] bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden"
					style={{ backgroundImage: `url(${image2})` }}
				>
					<div className="absolute bottom-5 left-5 px-4">
						<p className="text-sm text-white">
							४ अगस्ट २०२५, पर्यटन, प्रकाश उप्रेती
						</p>
						<p className="text-md text-white mt-2 font-bold">
							विकासको नयाँ युगमा नेपाली खेलकुद
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Secondsection