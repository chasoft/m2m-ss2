import React from "react"
import { frontpageTimeline } from "~/data/statics"
import RegButton from "../RegButton"

export default function Timeline() {
	return (
		<section id="Timeline" className="flex flex-col items-center w-full pb-20 pt-28 ">
			<div className="container flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 mx-auto 2xl:max-w-screen-xl">
				<div className="max-w-4xl mx-auto text-center">
				<span className="inline-block px-2 py-px mb-6 text-xs font-medium leading-5 text-gray-500 uppercase bg-gray-100 rounded-9xl" >TIMELINE</span>
					<h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter uppercase md:text-5xl text-slate-900">
						Các vòng thi
					</h2>
					<p className="mb-10 text-xl text-gray-500 md:text-2xl">
						Mi tellus litora platea. Nascetur. Metus id. Convallis libero parturient parturient nulla ante dis vehicula risus cum in quam tristique.
					</p>
				</div>
				<div className="container grid w-full max-w-screen-xl grid-cols-1 gap-16 mx-auto capitalize xs:grid-cols-2 lg:grid-cols-4">
					{frontpageTimeline.map((item) => (
						<div key={item.title}>
							<img src={item.img} alt={item.title} />
						</div>
					))}
				</div>
				<div className="pt-20">
					<RegButton />
				</div>
			</div>
		</section>
	)
}