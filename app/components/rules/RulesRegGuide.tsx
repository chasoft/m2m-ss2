import React from "react"
import RegButton from "../RegButton"

export default function RulesRegGuide() {
	return (
		<section id="RegGuide" className="w-full">
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">

				<h2 className="mb-8 text-4xl font-bold uppercase lg:mb-12 md:text-5xl xl:text-6xl" >
					Cách thức đăng ký
				</h2>
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div className="flex flex-col">
						<h3 className="mb-2 text-2xl font-bold text-center lg:mb-12 md:text-3xl xl:text-4xl">Offline</h3>
						<div className="p-10 prose prose-lg border-2 rounded-xl">
							<p>Odio platea ad. Amet Leo duis venenatis. Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
							<p>Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
						</div>
					</div>
					<div className="flex flex-col">
						<h3 className="mb-2 text-2xl font-bold text-center lg:mb-12 md:text-3xl xl:text-4xl">Online</h3>
						<div className="flex flex-col items-center justify-center flex-grow space-y-4">
							<p>Nhấp vào nút sau để đăng ký tham gia</p>
							<RegButton className="mb-10"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}