import React from "react"
import EventsDetails from "~/components/events/EventsDetails"
import EventsIntro from "~/components/events/EventsIntro"
import Header from "~/components/Header"

export default function EventsPage(){
	return (
		<>
			<Header />
			EventsPage	
			<EventsIntro />
			<EventsDetails />
		</>
	)
}