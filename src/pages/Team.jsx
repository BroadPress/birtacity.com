import React from "react";
import niranjan from "../assets/team/Niranjan.png";
import bitisha from "../assets/team/bitisha.png";
import lasta from "../assets/team/lasta.png";
import aashma from "../assets/team/aashma.png";
import sagar from "../assets/team/sagar.png";
import madan from "../assets/team/madan.png";
import milan from "../assets/team/milan.png";
import prakrit from "../assets/team/prakrit.png";
import priyanka from "../assets/team/priyanka.png";
import sakshyam from "../assets/team/sakshyam.png";
import rahul from "../assets/team/rahul.png";
import sarad from "../assets/team/sarad.png";
const Team = () => {
	const leader = [
		{ name: "Niranjan", role: "Project Manager", image: niranjan },
		{ name: "Madan", role: "Information Manager", image: madan },
		{ name: "Sakshyam", role: "Flutter Developer", image: sakshyam },
		{ name: "Aashma", role: "Backend Developer", image: aashma },
		{ name: "Bitisha", role: "React JS Developer", image: bitisha },
		{ name: "Lasta", role: "React JS Developer", image: lasta },
		{ name: "Milan", role: "UI/UX Designer", image: milan },
		{ name: "Prakrit", role: "UI/UX Designer", image: prakrit },
	];
	const management = [
		{ name: "Priyanka", role: "React JS Developer", image: priyanka },
		{ name: "Sagar", role: "Web Developer", image: sagar },
		{ name: "Rahul", role: "React JS Developer", image: rahul },
		{ name: "Sarad", role: "React Native Developer", image: sarad },
	];
	return (
		<div className="mt-10 flex flex-col gap-10">
			
			<div className="flex flex-col gap-3 text-center">
				<p className="text-lg font-bold">Meet Our Team</p>
				<p className="text-md w-1/4 mx-auto">
					Our team consists of experienced architects who develop projects from
					initial sketches to final implementation.
				</p>
			</div>
			{/* Leadership */}
			<div className="text-lg font-bold text-center">Leadership</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				{leader.map((member, index) => (
					<div
						key={index}
						className=" rounded-xl p-4 flex flex-col gap-5 items-center justify-center text-primary"
					>
						<div className=" h-48 w-48 rounded-full flex items-center justify-center">
							<img src={member.image} alt="" className="h-full w-full" />
						</div>
						<div className="flex flex-col text-md justify-center items-center">
							<p className="font-bold">{member.name}</p>
							<p>{member.role}</p>
						</div>
					</div>
				))}
			</div>
			{/* Management */}
			<div className="text-lg font-bold text-center">Management</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				{management.map((member, index) => (
					<div
						key={index}
						className=" rounded-xl p-4 flex flex-col gap-5 items-center justify-center text-primary"
					>
						<div className=" h-48 w-48 rounded-full flex items-center justify-center">
							<img src={member.image} alt="" className="h-full w-full" />
						</div>
						<div className="flex flex-col text-md justify-center items-center">
							<p className="font-bold">{member.name}</p>
							<p>{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
