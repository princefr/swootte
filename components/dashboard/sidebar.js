
import NavButton from "../navButtons"
import Link from "next/dist/client/link"
import { withRouter } from "next/router";
import { Transition } from "@headlessui/react";


const SideBar = props => {


	// https://codepen.io/robstinson/pen/bGwpNMV
	// https://lofiui.co/
	// dashboard (un apercue de la totalité de la chain ou smartcontrat)
	// wallet, totalité des wallets associés à une monnnaie spécifique.
	// generer de la monnaie , la totalité de la monnaie generer
	// transferts , la totalité des transferts.
	// withdraw , la totalité des retraits.
	// users, la totalité des utilisateurs avec ou non kyc (si non kyc , freeze l'account)
	// menu  d'urgence mettre en pause les  retraits poiur une personne ou pour un groupe de personne ou la totalité.
	// Audit.




	return (
		<div className="flex flex-col items-center w-16 h-full m-0 overflow-hidden text-gray-700 fixed  bg-white border-r">
			<div className="flex flex-col items-center mt-1 space-y-2 border-gray-300">
				{props.navButtons.map(button => (
					<NavButton key={button.path}
						path={button.path}
						label={button.label}
						icon={button.icon}>

					</NavButton>
				))
				}
			</div>

			{/* props.router.pathname === props.path ? "bg-roud text-white" : "hover:bg-roud hover:text-white" */}
			{/* flex flex-col items-center mt-2 border-t border-gray-300 */}

			<Transition show={props.userData != null && !props.loading && props.userData.usersExist.permissions.includes("AGENT")}>
				<div className={`flex flex-col items-center mt-2 border-t border-gray-300`}>
					<Link href={"/transactions"}>
						<a className={`relative flex items-center justify-center w-12 h-12 mt-2  ${props.router.pathname === '/transactions' ? "bg-roud text-white" : "hover:bg-roud hover:text-white"}`}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
							<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
						</a>
					</Link>
				</div>
			</Transition>
			<Transition show={props.userData != null && !props.loading && props.userData.usersExist.permissions.includes("ADMIN")}>
				<div className={`flex flex-col items-center mt-2`}>
					<Link href={"/token"}>
						<a className={`relative flex items-center justify-center w-12 h-12 mt-2  ${props.router.pathname === '/token' ? "bg-roud text-white" : "hover:bg-roud hover:text-white"}`}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
						</a>
					</Link>
				</div>
			</Transition>
		</div>

	)
}


export default withRouter(SideBar)