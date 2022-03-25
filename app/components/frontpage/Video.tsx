import React from "react"
import YoutubeEmbed from "../YoutubeEmbed"

export default function Video() {
	return (
		<section id="Sponsors" className="flex items-center justify-center min-h-screen bg-cover bg-opacity-10 bg-[url('/img/bg.jpg')]">
			<div className="container max-w-screen-lg p-4">
				<YoutubeEmbed embedId="2nY2BoXNQoA" />
			</div>
		</section>
	)
}