import React from "react"

export default function RulesSections() {
	return (
		<section id="Sections" className="w-full py-20">
			<div className="container flex flex-col justify-center min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">
				<h2 className="mb-4 text-4xl font-bold uppercase lg:mb-12 md:text-5xl xl:text-6xl" >
					Thông tin chi tiết
				</h2>
				<div className="grid grid-cols-2 gap-4">
					<div id="vong1" className="col-span-2 p-10 prose prose-lg border-2 md:col-span-1 rounded-xl">
						<h3>Vòng 1</h3>
						<p>Odio platea ad. Amet Leo duis venenatis. Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
					</div>
					<div id="vong2" className="col-span-2 p-10 prose prose-lg border-2 md:col-span-1 rounded-xl">
						<h3>Vòng 2</h3>
						<p>Odio platea ad. Amet Leo duis venenatis. Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
					</div>
					<div id="vong3" className="max-w-screen-xl col-span-2 p-10 prose prose-lg border-2 rounded-xl">
						<h3>Vòng 3</h3>
						<p>Odio platea ad. Amet Leo duis venenatis. Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
					</div>
					<div id="vong4" className="max-w-screen-xl col-span-2 p-10 prose prose-lg border-2 rounded-xl">
						<h3>Vòng 4</h3>
						<p>Odio platea ad. Amet Leo duis venenatis. Dolor curabitur viverra volutpat aliquet maecenas, donec. Elementum vel torquent vestibulum porttitor risus.</p>
					</div>
				</div>
			</div>
		</section>
	)
}