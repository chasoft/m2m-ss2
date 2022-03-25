import React from "react"
import RegButton from "../RegButton"

export default function RulesInfo() {
	return (
		<section id="RulesInfo" className="w-full">
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">
				<div className="max-w-screen-lg prose prose-xl">
					<h2>Faucibus nostra suspendisse</h2>
					<p>
						Ut duis elementum suscipit tempor. Egestas suscipit. Molestie dis. Ridiculus. Ultricies. Inceptos porttitor euismod mollis dui.
					</p>
					<p>
						Nec fusce penatibus eros dolor massa tincidunt parturient, faucibus nostra suspendisse dapibus ut enim sed. Tristique nonummy. Fermentum. Metus.
					</p>
					<p>
						Class laoreet lobortis senectus sociis dis Duis. Ornare nam netus massa ad fusce.
					</p>
					<p>
						Auctor commodo aenean dictumst, phasellus augue porta. Pellentesque odio, montes commodo litora.
					</p>
				</div>
				<div className="p-20">
					<RegButton />
				</div>
			</div>
		</section>
	)
}