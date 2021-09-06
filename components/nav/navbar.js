import styles from "../../styles/Home.module.css"
import { useContext, useState } from "react";
import Link from 'next/link'
import ConnectButton from '../buttons/connectButton'
import LandingProductsButton from "../landing/buttons/LandingProductsButton";
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext";
import { useRouter } from "next/router";

export const DashboardButton = () => {
    const router = useRouter()
    const gotoDashboard =(event) => {
        event.preventDefault()
        router.push("/home")
    }
    return (
        <button onClick={gotoDashboard} className="flex bg-black p-2.5 rounded-full text-white justify-center items-center space-x-3 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 font-montserrat">
                <button>Dashboard</button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
    )
}



export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {firebaseUID, } = useContext(FirebaseUIDContext)

    return (
        <div style={styles} className="bg-white w-full h-20">
            <nav>

                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                            <a
                                href="/"
                                aria-label="Company"
                                title="Company"
                                className="inline-flex items-center mr-8"
                            >
                                <img src="images/Swootte_logo_black.svg" className="h-10" >
                                    
                                </img>
                            </a>
                            <ul className="flex items-center hidden space-x-8 lg:flex">
                                <li>
                                    <LandingProductsButton></LandingProductsButton>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        className="flex items-center space-x-2"
                                    >
                                        <button className
                                        ="font-medium font-montserrat tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400">Use cases</button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Product pricing"
                                        title="Product pricing"
                                        className="flex items-center space-x-2"
                                    >
                                        <button className
                                        ="font-medium font-montserrat tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400">Developers</button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Product pricing"
                                        title="Product pricing"
                                        className="font-medium font-montserrat tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="About us"
                                        title="About us"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        About us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                {
                                    firebaseUID ? <DashboardButton></DashboardButton> : <ConnectButton></ConnectButton>
                                }
                                
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    className="inline-flex items-center"
                                                >
                                                    <svg
                                                        className="w-8 text-deep-purple-accent-400"
                                                        viewBox="0 0 24 24"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit="10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                    >
                                                        <rect x="3" y="1" width="7" height="12" />
                                                        <rect x="3" y="17" width="7" height="6" />
                                                        <rect x="14" y="1" width="7" height="6" />
                                                        <rect x="14" y="11" width="7" height="12" />
                                                    </svg>
                                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        Company
                                                    </span>
                                                </a>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Use cases                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Developers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Pricing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="About us"
                                                        title="About us"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        About us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Sign in"
                                                        title="Sign in"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Sign in
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Sign up
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};