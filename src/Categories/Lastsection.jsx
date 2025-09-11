import React from 'react'
import image1 from '../assets/Categories/Lastsection/image1.jpg'
import image2 from '../assets/Categories/Lastsection/image2.jpg'
import image3 from '../assets/Categories/Lastsection/image3.jpg'
import image4 from '../assets/Categories/Lastsection/image4.jpg'
const Lastsection = () => {
    const data = [
			{
				title: "फेवातालमा पर्यटकहरूको बोट सवारी",
				desc: "पोखराको फेवातालमा पर्यटकहरूले बोट सवारीको आनन्द लिइरहेका छन्। नेपालको पर्यटन राजधानीको रूपमा चिनिने पोखरामा यो गतिविधि पर्यटकहरूक....",
				img: image2,
			},
			{
				title: "मन्दिरको बन्दाबन्दी र पुनः उद्घाटन",
				desc: "जनवरी २०२५ मा, गोरखाको प्रसिद्ध मनकामना मन्दिर COVID-19 को पुनः जोखिमका कारण बन्द गरिएको थियो। मन्दिर क्षेत्र विकास ट्रस्टको ...",
				img: image3,
			},
			{
				title: "पालीमा प्राकृतिक दृश्यको विस्तृत वर्णन",
				desc: "प्रकृति द्वारा सिर्जना गरिएको सुन्दर दृश्य, जस्तै हिमाल, ताल, जंगल, नदी र आकाशको मिश्रण पहाड र नदीले मनमोहक प्राकृतिक दृष्य प्रस्तुत गर्छ...।",
				img: image4,
			},
		];
  return (
		<div className="flex flex-col gap-10 mt-10">
			<p className="text-lg font-bold">थप पढ्नुहोस्</p>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex flex-col lg:w-1/2  gap-3">
					<img src={image1} alt="" className="aspect-video rounded-[15px]" />
					<p className="text-md font-bold">
						रोबोटिक्स शिक्षा: विद्यार्थीमा प्रविधिको पहुँच
					</p>
					<p className="text-md text-justify">
						काठमाडौं र पोखराका विद्यालयहरूले रोबोटिक्स र STEM शिक्षा कार्यक्रम
						सुरु गरेका छन्। विद्यार्थीहरूले प्रायोगिक तरिकाले रोबोट निर्माण र
						प्रोग्रामिङ अनुभव गर्ने अवसर पाउँछन |
						<p className="text-md text-justify">
							काठमाडौं र पोखराका विद्यालयहरूले रोबोटिक्स र STEM शिक्षा कार्यक्रम
							सुरु गरेका छन्। विद्यार्थीहरूले प्रायोगिक तरिकाले रोबोट निर्माण र
							प्रोग्रामिङ अनुभव गर्ने अवसर पाउँछन
						</p>
					</p>
				</div>
				<div className="flex flex-col gap-10 lg:w-1/2">
					{data.map((item, index) => (
						<div
							key={index}
							className="flex flex-col-reverse lg:flex-row gap-2 lg:justify-between"
						>
							<div className="flex flex-col gap-2 text-md justify-center lg:w-[65%]">
								<p className="font-bold">{item.title}</p>
								<p className="text-justify line-clamp-3 ">{item.desc}</p>
							</div>
							<img
								src={item.img}
								alt={item.title}
								className="lg:w-[232px] lg:h-[133px] rounded-[15px] aspect-video "
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Lastsection