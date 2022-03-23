import { throttle } from "lodash"
import { useEffect, useRef, useState } from "react"

/**
 * to check whether current position of scrollY has been greater than a supplied position
 */
export function useScrollOver(pos: number) {
	const [scrollOvered, setScrollOvered] = useState(false)

	useEffect(() => {
		const handleSetScrolledOver = () => {
			if (window.scrollY > pos) {
				if (!scrollOvered) setScrollOvered(true)	//the if statement here is to only update if necessary
			} else {
				if (scrollOvered) setScrollOvered(false)	//the if statement here is to only update if necessary
			}
		}
		window.addEventListener("scroll", handleSetScrolledOver)
		return () => window.removeEventListener("scroll", handleSetScrolledOver)
	}, [scrollOvered, pos])

	return scrollOvered
}

/**
 * To check whether user is going down.
 * `minY` is the minimum distant before starting checking.
 * default is 0 for to check immediately.
 */
export function useScrollDown(_minY: number | undefined) {
	const [scrolling, setScrolling] = useState({
		isGoingDown: false,
		isOnTop: true,
	})
	const savedScrollY = useRef(0)
	const minY = _minY ?? 0

	console.log("useScrollDown")

	useEffect(() => {

		const checker = throttle(() => {
			const currentPos = window.scrollY

			const newState = {
				isGoingDown:
					(currentPos > savedScrollY.current && currentPos > minY)
						? true
						: false,
				isOnTop:
					(currentPos <= minY || currentPos < 90)
						? true
						: false
			}

			if ((newState.isGoingDown !== scrolling.isGoingDown) || (newState.isOnTop !== scrolling.isOnTop))
				setScrolling(newState)
				
			savedScrollY.current = currentPos
		}, 400)

		window.addEventListener("scroll", checker)

		return () => window.removeEventListener("scroll", checker)

	}, [minY, scrolling.isGoingDown, scrolling.isOnTop])

	return scrolling
}