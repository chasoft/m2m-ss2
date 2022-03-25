import React from "react"
import RegButton from "../RegButton"

export default function Hero() {
	return (
		<section id="Hero" className="flex items-center pb-8 bg-top bg-no-repeat bg-cover bg-gray-700  min-h-screen bg-[url('/img/bg.jpg')] bg-opacity-20 bg-blend-darken">
			<div className="container px-4 mx-auto">
				<div className="pb-16 text-center sm:pb-20 pt-28">
					<div className="max-w-screen-md mx-auto mb-8">
						<h2 className="mb-4 text-4xl font-bold text-white sm:leading-relaxed sm:text-5xl md:text-6xl lg:text-7xl textShadow-dark">
							<span>MENTEE </span>
							<span className="text-blue-600"> TO MENTOR </span>
							<span className="whitespace-nowrap "> (SEASON II) </span>
						</h2>
						<p className="text-2xl text-white textShadow-dark">Marketing, Logistics & Supply Chains và Human Resources</p>
					</div>
					<div>
						<RegButton />
					</div>
				</div>
			</div>
		</section>
	)
}