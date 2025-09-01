import React from 'react'
import image1 from '../assets/Homepage/thirdsection/image1.png'
import time from '../assets/icons/time.svg'
const Thirdsection = () => {
  return (
		<div className="mt-10 flex flex-col gap-9">
			<div className="text-lg font-bold border border-b-[#00000033] border-x-0 border-t-0 py-5">
				प्रविधि
			</div>
			<div className="flex gap-4">
				<div className="py-7 flex w-[75%] gap-7">
					<div className="flex gap-7">
						<img
							src={image1}
							alt=""
							className="rounded-[20px] w-1/2 aspect-video"
						/>
						<div className="flex flex-col justify-around w-1/2 ">
							<p className="font-bold text-md">
								कम्प्युटर भाइरस भनेको के हो र यो किन खतरनाक हुन्छ?{" "}
							</p>
							<p>
								नेपालमा इन्टरनेटको पहुँच तीव्र रूपमा बढिरहेको छ, र यससँगै
								कम्प्युटर भाइरसको जोखिम पनि बढिरहेको छ। त्यसैले, यस समस्याबाट
								जोगिनको लागि सजग हुनु अत्यावश्यक छ नेपालमा इन्टरनेटको पहुँच
								तीव्र रूपमा बढिरहेको छ, र यससँगै कम्प्युटर भाइरसको जोखिम पनि
								बढिरहेको छ। त्यसैले, यस समस्याबाट जोगिनको लागि सजग हुनु
								अत्यावश्यक छ।।
							</p>
							<div className="flex gap-5">
								<div className="flex gap-3">
									<img src={time} alt="h-5 w-5" className="src" />
									<p className="text-xs">७ मिनेटमा पढ्नुहोस</p>
								</div>
								<div className="text-xs">
									<p>प्रविधि</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 w-[25%] border-y-0 border-r-0 border border-l-[#00000033] px-8 justify-center">
					<div className="text-lg font-bold">सुझावहरू</div>
					<div className="flex flex-col gap-2">
						<p className="text-md">किन हुन्छ वेबसाइट ह्याक?</p>
						<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-md">पासवर्ड कसरी सुरक्षित राख्ने?</p>
						<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-md">किन हुन्छ वेबसाइट ह्याक?</p>
						<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Thirdsection