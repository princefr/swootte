
import NavButton from "../navButtons"



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
				{ props.navButtons.map(button => (
					<NavButton key={button.path}
					path={button.path}
					label={button.label}
					icon={button.icon}></NavButton>
				))
				}




			</div>
			<div className="flex flex-col items-center mt-2 border-t border-gray-300">
				<a className="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</a>
			</div>
		</div>

	)
}


export default SideBar