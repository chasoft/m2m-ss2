import React from "react"

import {motion} from "framer-motion"

export default function Sponsors() {
	return (
		<section id="Sponsors" className="w-full">
			<div className="container min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">

				<section className="py-20 bg-white xl:pt-24">
					<div className="container px-4 mx-auto">
						<div className="flex flex-col items-center mb-8">
							<span className="inline-block px-2 py-px mb-6 text-xs font-medium leading-5 text-gray-500 uppercase bg-gray-100 rounded-9xl" >Sponsors</span>
							<h3 className="text-4xl font-bold tracking-tighter uppercase mb-9 md:text-5xl" >
								Nhà Tài Trợ
							</h3>
							<p className="max-w-screen-sm text-lg font-medium text-center text-gray-500 md:text-xl" >
								aMi tellus litora platea. Nascetur. Metus id. Convallis libero parturient parturient nulla ante dis vehicula risus cum in quam tristique.	
							</p>
						</div>
						<div className="flex flex-wrap justify-center pt-4 -mx-4">
							<div className="w-1/2 px-4 mb-8 md:w-1/3 lg:w-1/5 lg:mb-0">
								<motion.div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md md:px-8 aspect-square" whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)"}}>
									<img className="mx-auto" src="/img/logo.png" alt="" />
								</motion.div>
							</div>
							<div className="w-1/2 px-4 mb-8 md:w-1/3 lg:w-1/5 lg:mb-0">
								<motion.div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md md:px-8 aspect-square" whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)"}}>
									<img className="mx-auto" src="/img/logo.png" alt="" />
								</motion.div>
							</div>
							<div className="w-1/2 px-4 mb-8 md:w-1/3 lg:w-1/5 lg:mb-0">
								<motion.div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md md:px-8 aspect-square" whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)"}}>
									<img className="mx-auto" src="/img/logo.png" alt="" />
								</motion.div>
							</div>
							<div className="w-1/2 px-4 mb-8 md:w-1/3 lg:w-1/5 md:mb-0">
								<motion.div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md md:px-8 aspect-square" whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)"}}>
									<img className="mx-auto" src="/img/logo.png" alt="" />
								</motion.div>
							</div>
						</div>
					</div>
				</section>


			</div>
		</section>
	)
}