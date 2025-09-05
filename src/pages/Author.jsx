import React from 'react'
import image1 from '../assets/Author/image1.png'
import image2 from '../assets/Author/image2.png'
import image3 from '../assets/Author/image3.png'
import image4 from '../assets/Author/image4.png'
import image5 from '../assets/Author/image5.png'
import image6 from '../assets/Author/image6.png'
import image7 from '../assets/Author/image7.png'
import image8 from '../assets/Author/image8.png'
import image9 from '../assets/Author/image9.png'
import image10 from '../assets/Author/image10.png'
import image11 from '../assets/Author/image11.png'
import image12 from '../assets/Author/image12.png'
import image13 from '../assets/Author/image13.png'
import image14 from '../assets/Author/image14.png'
import image15 from '../assets/Author/image15.png'
import image16 from '../assets/Author/image16.png'
import image17 from '../assets/Author/image17.png'
import image18 from '../assets/Author/image18.png'
import image19 from '../assets/Author/image19.png'
import image20 from '../assets/Author/image20.png'
import image21 from '../assets/Author/image21.png'
import pracassir from '../assets/Author/pracassir.png'
const Author = () => {
  return (
		<div className="mt-10 flex flex-col gap-10 ">
			<div className="flex flex-col ">
				<div className="w-full text-white flex flex-col lg:flex-row items-center gap-15 lg:gap-23 h-auto py-6 px-8 lg:px-22 bg-[#055D59]">
					<div className=" flex flex-col  justify-center w-[40%]  items-center p-6 gap-6 ">
						<div className="bg-gray-200 items-center flex justify-center  rounded-full h-[238px] w-[238px] ">
							<img
								src={pracassir}
								alt=""
								className="h-full w-full rounded-full"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-7 ">
						{" "}
						<div className="flex flex-col gap-8 justify-evenly border-0 border-b-2 py-8 ">
							<div className="flex flex-col items-start text-white">
								<p className="text-3xl font-bold">प्रकाश उप्रेती</p>
								<span className="w-12 h-[3px] bg-white mt-4"></span>
							</div>
							<p className="text-md text-justify">
								प्रकाश उप्रेती सूचना प्रविधिको क्षेत्रमा लामो समयदेखि सक्रिय
								व्यक्तित्व हुनुहुन्छ. उहाँले सूचना प्रविधि, डिजिटल मिडिया, र
								नवप्रवर्तनमूलक प्रविधिहरूमा निरन्तर कलम चलाउँदै आउनुभएको छ. लेखन
								तथा अनुसन्धानका माध्यमबाट प्रविधिको उपयोग, प्रभाव र
								विकासक्रममाथि गहिरो चासो राख्नुहुन्छ |
							</p>
						</div>
						<div className="flex gap-6">
							<div className=" flex flex-col gap-1 rounded-[15px]  bg-white p-4 text-black flex-1 ">
								<p className="font-bold text-md">जम्मा लेखहरू</p>
								<p className="font-bold text-lg">८</p>
								<div className="flex items-center">
									<div className="grow bg-[#B1E8B8] h-1">
										<div
											className="bg-black h-1 
                    transform transition-transform duration-300 hover:scale-105 w-3/12"
										></div>
									</div>
								</div>
							</div>
							<div className="rounded-[15px]  gap-1   bg-white p-4 text-black flex-1 ">
								<p className="font-bold text-md">मुख्य श्रेणीहरू</p>
								<p className="font-bold text-lg">प्रविधि, विचार, जीवनशैली</p>
								<div className="flex gap-2">
									<div class="mt-2 border-t-3 border-black w-4 "></div>
									<div class="mt-2 border-t-3 border-black w-4 "></div>
									<div class="mt-2 border-t-3 border-black w-4 "></div>
								</div>
							</div>
							<div className="rounded-[15px]  bg-white p-4 font-bold text-black flex-1 ">
								<p className=" text-md">लेखन शुरु गरेको मिति</p>
								<p className=" text-lg"> २०२५ जून २१ , शनिवार</p>
								<p className="">२०२८-०६-२१</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* main categories */}
			<div className=" flex gap-4 flex-col">
				<div className="text-lg font-bold">
					<p className="underline underline-offset-8">मुख्य विधाहरू</p>
				</div>
				<div className="grid grid-cols-4 gap-10 lg:justify-around bg-primary p-5 text-md ">
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold ">
							<p>पर्यटन </p>
							<p> ७ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold  ">
							<p>जीवनशैली </p>
							<p>२ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1 
                    transform transition-transform duration-300 hover:scale-105 w-2/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold   ">
							<p>अर्थ</p>
							<p>९ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1  
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px] ">
						<div className="flex flex-col gap-3 font-semibold ">
							<p>प्रबिधि</p>
							<p>४ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1  
                    transform transition-transform duration-300 hover:scale-105 w-4/12"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Author