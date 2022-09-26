
import ConnectButton from '../buttons/ConnectButton';
import Link from 'next/link'
import SwootteLogo from '../logo/swootte';



export const Nav = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <Link href={"/"}>
                    <a>
                        <SwootteLogo height={"h-8"}></SwootteLogo>
                    </a>
                </Link>
 
 
                <div className="mt-4 md:mt-0">
                    <ConnectButton></ConnectButton>
                </div>
            </div>
        </header>
    );
};