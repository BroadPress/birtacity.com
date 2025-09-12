import image1 from '../assets/Homepage/Tajasamachar/image1.png'
import image4 from '../assets/Homepage/Tajasamachar/image4.png'
import image3 from '../assets/Homepage/Tajasamachar/image3.png'
import image2 from '../assets/Homepage/Tajasamachar/image2.png'
import pointarr from '../assets/icons/pointarr.svg'
import thunder from '../assets/icons/thunderhollow.svg'
const Tajasamachar = () => {
	return (
		<div className="mt-10 flex flex-col gap-10 bg-[#FFFFFF]">
			<div className="font-bold text-lg">ताजा समाचार</div>
            <div className="lg:flex-row flex flex-col gap-10">
                {/* Left section */}
				<div className="flex flex-col gap-10 lg:w-1/2 w-full lg:border lg:border-y-0 lg:border-l-0 lg:pr-10">
					<div className="flex flex-col gap-1">
						<img src={image1} alt="" className="aspect-video rounded-[20px] " />
						<p className="font-semibold text-[#3C3C3C]">BREAKING NEWS</p>
						<p className="font-bold text-black">सफल पालिकाका सफल मेयर कार्की</p>
						<p className="text-md text-[#878787] text-justify">
							काठमाडौं महानगरपालिकालाई समेत उछिनेर अहिले देशभरीको नगरपालिका मध्य
							उत्कृष्ट नगरपालिका बन्न पुगेको कागेश्वरी मनोहरा नगरपालिकाको
							महत्त्व र स्थान आफ्नै छ । संघीय राजधानी काठमाडौं उपत्यकाको
							उत्तरपूर्वी भागमा अवस्थित कागेश्वरी मनोहरा नगरपालिकाले पछिल्ला
							केही वर्ष यता निकै चर्चा पाउँदै आएको छ। जसको श्रेय नगरका प्रमुख
							उपेन्द्र कार्कीलाई दिँदा पनि फरक नपर्ने अवस्था छ ।
						</p>
						<p className="text-xs ">सुधीर नेपाल | २०२५ जुलाई १४, सोमबार</p>
					</div>
					<div className="lg:flex-row flex flex-col-reverse gap-5 ">
						<div className="flex flex-col gap-2 lg:w-1/2 w-full lg:justify-center">
							<div className="flex flex-col gap-3">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									क्रिकेटर द्वय भट्ट र रावललाई आजीवन छात्रवृत्ति
								</p>
								<p className="text-md text-justify">
									धनगढीस्थित एसपीए कलेजले हालै मलेसियामा सम्पन्न 'एसीसी मेन्स
									यू-१६ ईस्ट जोन कप क्रिकेट प्रतियोगिता’
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
						</div>
						<img
							src={image4}
							alt=""
							className="lg:w-1/2 aspect-video rounded-[20px]"
						/>
					</div>
                </div>
                {/* Right section */}
				<div className="lg:flex-row flex flex-col  lg:w-1/2 gap-8">
					{/* First column */}
					<div className="flex lg:w-1/2  ">
						<div className="flex flex-col gap-15">
							<div className="flex flex-col gap-1">
								<img
									src={image2}
									alt=""
									className="aspect-video rounded-[20px]"
								/>
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									क्रिकेटर द्वय भट्ट र रावललाई आजीवन छात्रवृत्ति
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									गर्मी मौसममा पिउन मिल्ने उत्कृष्ट पेय पदार्थ
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									गर्मी मौसममा पिउन मिल्ने उत्कृष्ट पेय पदार्थ
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									विश्वका भ्रमण गर्नैपर्ने प्रमुख गन्तव्यहरू
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">सुदूर पश्चिम नेपालको पर्यटन</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
						</div>
					</div>
					{/* Second column */}
					<div className="flex lg:w-1/2 w-full">
						<div className="flex flex-col gap-15">
							<div className="flex flex-col gap-1">
								<img
									src={image3}
									alt=""
									className="aspect-video rounded-[20px]"
								/>
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									नेपाली चलचित्रको बढ्दो लोकप्रियता
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									नेपाली चाडपर्वहरू: परम्परा, मान्यता
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									मेरो सेरोफेरो - शुक्लाफाँटा राष्ट्रिय निकुञ्ज
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">
									नेपाली चाडपर्वहरू: परम्परा, मान्यता
								</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<div className="flex gap-1">
									<img src={pointarr} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										BREAKING NEWS
									</p>{" "}
									<p className="text-xs font-bold">TRENDING NOW</p>
								</div>
								<p className="text-md font-bold">सुदूर पश्चिम नेपालको पर्यटन</p>
								<div className="flex gap-1 text-[#747474]">
									<img src={thunder} alt="" className="src" />
									<p className="text-xs text-[#3C3C3C] font-bold">
										सुधीर नेपाल
									</p>{" "}
									<p className="text-xs font-bold">२०२५ जुलाई १४, सोमबार</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Tajasamachar