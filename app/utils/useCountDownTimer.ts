import { useCallback, useEffect, useState } from "react"

type MyDateType = {
	day: number
	month: number
	year: number
}

function calculateTimeLeft({day, month, year}: MyDateType) {
	let difference = +new Date(`${month.toString()}/${day.toString()}/${year.toString()}`) - +new Date()
  
	let timeLeft  = {
		days: 0, 
		hours: 0, 
		minutes: 0, 
		seconds: 0, 
		completed: true
	}
  
	if (difference > 0) {
	  timeLeft = {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
		completed: false
	  }
	}
  
	return timeLeft
  }

export default function useCountDownTimer({day, month, year}: MyDateType){
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({day, month, year}))

	const addLeadingZero = useCallback((n:number): string => {
		if (n < 10) 
			return `0${n.toString()}`
		return n.toString()
	},[])

	useEffect(()=>{
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft({day, month, year}))
			console.log("useCountDownTimer")
		  }, 1000)
		  return () => clearTimeout(timer)
	},[day, month, year])
	
	return {timeLeft, addLeadingZero}
}