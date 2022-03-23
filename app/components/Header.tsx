import React from "react"

import clsx from "clsx"
import { Link, NavLink } from "remix"

import { headerMenus, SITE_NAME, SITE_SHORT_DESC } from "~/data/statics"
import { MenuItemType } from "~/types"
import { useScrollDown } from "~/utils/scrolling"
import Logo from "./Logo"

type TopMenuProps = {
	delayShowUp?: number
	forceDarkMode?: boolean
}

export default function Header({ delayShowUp, forceDarkMode }: TopMenuProps) {
	const { isGoingDown, isOnTop } = useScrollDown(delayShowUp)
	return (
		<div className={clsx("fixed z-[5000] flex flex-col w-full shadow-lg", isGoingDown ? "opacity-0" : "opacity-100", (forceDarkMode && isOnTop) ? "bg-transparent" : "bg-white")}>
			<header id="header" className="flex items-center justify-end w-full p-2 mx-auto xs:px-10 2xl:mx-auto 2xl:max-w-screen-xl">
				<Link to="/">
					<div className="flex flex-row items-center">
						<Logo className="w-10 h-10" isAnimated />
						<div className="flex xs:hidden lg:flex lg:flex-col lg:items-center">
							<div className="flex flex-col items-center">
								<span className={clsx("ml-3 text-xl font-bold tracking-tight uppercase xs:tracking-wider", (forceDarkMode && isOnTop) ? "text-white" : "")}>
									{SITE_NAME}
								</span>
								<span className={clsx("ml-3 -mt-[0.3rem] text-sm tracking-tighter uppercase xs:tracking-normal", (forceDarkMode && isOnTop) ? "text-white textShadow-dark" : "")}>
									{SITE_SHORT_DESC}
								</span>
							</div>
						</div>
					</div>
				</Link>

				<ul className={clsx("hidden p-2 ml-auto mr-4 font-medium rounded-box menu menu-horizontal text-md md:flex", (forceDarkMode && isOnTop) ? "text-white" : "")}>
					{headerMenus.map((headerMenu: MenuItemType) => (
						<li key={headerMenu.slug} className={headerMenu.lessImportant ? "hidden py-2 xl:flex" : "py-2"}>
							{headerMenu.external
								? <a href={headerMenu.slug} className={(forceDarkMode && isOnTop) ? "hover:bg-white/30" : ""}>
									{headerMenu.icon
										? <img src={headerMenu.icon} className="w-6 h-6 bg-white" alt=""/>
										: headerMenu.title}
								</a>
								: <NavLink to={headerMenu.slug} className={(forceDarkMode && isOnTop) ? "hover:bg-white/30" : ""}>
									{headerMenu.icon
										? <img src={headerMenu.icon} className="w-6 h-6" alt=""/>
										: headerMenu.title}
								</NavLink>}
						</li>
					))}
				</ul>

				<div className="hidden space-x-4 md:flex">
					<a rel="prefetch" href="https://store.bizchain.vn/login">
						<button className={clsx("py-2 border-2 btn btn-md", (forceDarkMode && isOnTop) ? "bg-transparent text-white" : "text-black bg-white focus:text-white hover:text-white hover:bg-black")}>
							Login
						</button>
					</a>
				</div>

				<div className="inline-block ml-0 space-x-4 md:hidden md:ml-auto dropdown dropdown-end">

					<button className="btn btn-square btn-ghost">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</button>

					<ul tabIndex={0} className="p-2 mt-3 shadow-xl border-[1px] border-gray-300 menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						{headerMenus.map((headerMenu: MenuItemType) => (
							<li key={headerMenu.slug}>
								{headerMenu.external
									? <a href={headerMenu.slug} className="whitespace-nowrap">
										{headerMenu.icon
											&& <img src={headerMenu.icon} className="w-4 h-4" alt=""/>}
										{headerMenu.description}
									</a>
									: <NavLink to={headerMenu.slug}>
										{headerMenu.icon
											&& <img src={headerMenu.icon} className="w-4 h-4" alt="" />}
										{headerMenu.description}
									</NavLink>}
							</li>
						))}
						<li className="-mx-2 bg-gray-300"></li>
						<li className="">
							<a rel="prefetch" href="https://store.bizchain.vn/login">
								<img className="w-4 h-4" src="/img/login.svg" alt=""/> Login
							</a>
						</li>
					</ul>
				</div>

			</header>
		</div>
	)
}