
import { useContext } from "react"
import { SideBarMenuContext } from "../../context/SideBarMenuContext"


export default function SideBar() {
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

	const { sidemenu, setActiveMenu } = useContext(SideBarMenuContext)

	const handleClick = (page) => {
		setActiveMenu(prevState => prevState.map((pref) => pref.pageName == page.pageName ? { pageName: pref.pageName, isActive: !pref.isActive } : { pageName: pref.pageName, isActive: false }))

	}

	return (
		<div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-white">

			<a className="flex items-center justify-center mt-4" href="#">
				<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
				</svg>
			</a>



			<div className="flex flex-col items-center mt-3 border-t border-gray-300">
				{
					sidemenu.map((page) => {
						switch (page.pageName) {
							case "home":
								return <a className={`flex items-center justify-center w-12 h-12 mt-2 ${page.isActive ? "bg-gray-300" : "hover:bg-gray-300"}`} href="#" onClick={(() => handleClick(page))}>
									<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
									</svg>
								</a>

							case "balance":
								return <a className={`flex items-center justify-center w-12 h-12 mt-2  ${page.isActive ? "bg-gray-300" : "hover:bg-gray-300"}`} href="#" onClick={(() => handleClick(page))}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
									</svg>
								</a>

							case "transferts":
								return <a className={`flex items-center justify-center w-12 h-12 mt-2  ${page.isActive ? "bg-gray-300" : "hover:bg-gray-300"}`} href="#" onClick={(() => handleClick(page))}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
									</svg>
								</a>

							case "users":
								return <a className={`flex items-center justify-center w-12 h-12 mt-2  ${page.isActive ? "bg-gray-300" : "hover:bg-gray-300"}`} href="#" onClick={(() => handleClick(page))}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</a>

						}
					})
				}




			</div>
			<div className="flex flex-col items-center mt-2 border-t border-gray-300">
				<a className="flex items-center justify-center w-12 h-12 mt-2  hover:bg-gray-300" href="#">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				</a>
				<a className="flex items-center justify-center w-12 h-12 mt-2  hover:bg-gray-300" href="#">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>
				</a>
				<a className="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</a>
			</div>
			<a className="flex items-center justify-center w-16 h-16 mt-auto bg-red-500 hover:bg-red-400" href="#">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
				</svg>
			</a>
		</div>

	)
}