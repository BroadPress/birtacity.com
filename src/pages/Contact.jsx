import React from "react";
import image1 from "../assets/Contact/1.svg";
import image2 from "../assets/Contact/2.svg";
import image3 from "../assets/Contact/3.svg";
import image4 from "../assets/Contact/4.svg";
import image5 from "../assets/Contact/5.svg";
import image6 from "../assets/Contact/6.svg";
import image7 from "../assets/Contact/7.svg";
import image8 from "../assets/Contact/image1.png";
const Contact = () => {
    const [formData, setFormData] = useState({
			firstName: "",
			lastName: "",
			email: "",
			solution: "",
			goals: "",
			source: "",
		});

		const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			console.log("Form Submitted:", formData);
			
		};
	return (
        <div className="mt-10 flex flex-col gap-10">
            {/* Main section */}
			<div className="bg-[#055D59] flex flex-col gap-15 text-white p-12">
				<div className="flex flex-col gap-6 items-center w-1/3 mx-auto">
					<p className="text-3xl">सम्पर्क गर्नुहोस्</p>
					<p className="text-md text-center">
						Birtacity सँग सम्पर्क गर्न चाहनुहुन्छ? तपाईंको सोधपुछ अनुसार यसका
						केही तरिकाहरू छन्। तल सबै विकल्पहरू जाँच गर्नुहोस्।
					</p>
				</div>
				<div className=" flex justify-between w-[70%] mx-auto">
					<div className="flex flex-col gap-8 w-1/3">
						<img src={image1} alt="" className="h-8 w-8" />
						<p className="text-lg">समर्थन प्राप्त गर्नुहोस्</p>
						<p className="text-md">
							यदि तपाईंलाई BIRTACITY प्रयोग गर्दा समस्या आइरहेको छ भने, Help &
							Learning का लेखहरू हेर्नुहोस् वा हाम्रो चर्चा फोरमहरू मा अन्य
							Evernote प्रयोगकर्ताबाट सहयोग लिनुहोस्।
						</p>
						<div className="w-fit bg-white text-black text-lg font-bold">
							<p>{"</>"}</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 w-1/3">
						<img src={image2} alt="" className="h-8 w-8" />
						<p className="text-lg">समर्थन प्राप्त गर्नुहोस्</p>
						<p className="text-md">
							यदि तपाईंलाई BIRTACITY प्रयोग गर्दा समस्या आइरहेको छ भने, Help &
							Learning का लेखहरू हेर्नुहोस् वा हाम्रो चर्चा फोरमहरू मा अन्य
							Evernote प्रयोगकर्ताबाट सहयोग लिनुहोस्।
						</p>
						<img src={image3} alt="" className="h-8 w-8" />
					</div>
				</div>
            </div>
            {/* Form section */}
		</div>
	);
};

export default Contact;
