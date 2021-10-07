
import ConnectButton from '../buttons/connectButton'
import { SwootteLogo } from "../dashboard/nav";
import Link from 'next/link'



export const Nav = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"}>
                    <a>
                        <SwootteLogo height={"h-8"}></SwootteLogo>
                    </a>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 font-montserrat">Services</a>
                    <a className="mr-5 hover:text-gray-900 font-montserrat">Cas d'usages</a>
                    <a className="mr-5 hover:text-gray-900 font-montserrat">Developpeurs</a>
                </nav>
                <div className="mt-4 md:mt-0">
                    <ConnectButton></ConnectButton>
                </div>
            </div>
        </header>
    );
};