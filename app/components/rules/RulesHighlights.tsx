import React from "react"

export default function RulesHighlights() {
	return (
		<section id="Highlights" className="w-full">
			<div className="container min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">
				<h2 className="mb-12 text-4xl font-bold tracking-tighter uppercase md:text-5xl">Điểm nhấn M2MSS2</h2>
				<div className="flex flex-col space-y-10">
					<div className="shadow-xl card md:card-side bg-base-100">
						<div className="card-body">
							<h2 className="card-title">New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
						</div>
						<figure><img src="https://api.lorem.space/image/movie?w=400&h=280" className="w-full md:w-[400px] md:h-[280px]" alt="Movie" /></figure>
					</div>
					<div className="shadow-xl card md:card-side bg-base-100">
						<div className="card-body">
							<h2 className="card-title">New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
						</div>
						<figure><img src="https://api.lorem.space/image/movie?w=400&h=280" className="w-full md:w-[400px] md:h-[280px]" alt="Movie" /></figure>
					</div>
				</div>
			</div>
		</section>
	)
}