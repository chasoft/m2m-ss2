import React from "react"

export default function RulesSegments() {
	return (
		<section id="Segments" className="flex items-center w-full min-h-screen">
			<div className="container px-4 mx-auto 2xl:max-w-screen-xl">
				<h2 className="text-4xl font-bold tracking-tighter uppercase mb-9 md:text-5xl">Ba nhóm ngành</h2>
				<div className="carousel">
					<div className="carousel-inner">
						<input className="hidden carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" defaultChecked />
						<div className="carousel-item">
							<img src="/img/slice1.png" alt="" />
						</div>
						<input className="hidden carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" />
						<div className="carousel-item">
							<img src="/img/slice2.png" alt="" />
						</div>
						<input className="hidden carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" />
						<div className="carousel-item">
							<img src="/img/slice3.png" alt="" />
						</div>
						<label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
						<label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
						<label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
						<label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
						<label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
						<label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
						<ol className="carousel-indicators">
							<li>
								<label htmlFor="carousel-1" className="carousel-bullet">•</label>
							</li>
							<li>
								<label htmlFor="carousel-2" className="carousel-bullet">•</label>
							</li>
							<li>
								<label htmlFor="carousel-3" className="carousel-bullet">•</label>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	)
}