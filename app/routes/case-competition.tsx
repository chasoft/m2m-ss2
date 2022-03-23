import React from "react"

import CaseDetails from "~/components/case/CaseDetails"
import CaseIntro from "~/components/case/CaseIntro"
import CaseJudges from "~/components/case/CaseJudges"
import CasePriceStructure from "~/components/case/CasePriceStructure"
import CaseTimeline from "~/components/case/CaseTimeline"
import Header from "~/components/Header"

export default function CaseCompetitionPage(){
	return (
		<>
			<Header />
			M2M Case Competition 	
			<CaseIntro />
			<CaseTimeline />
			<CaseDetails />
			<CaseJudges />
			<CasePriceStructure />
		</>
	)
}