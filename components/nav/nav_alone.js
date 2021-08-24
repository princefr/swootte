import styles from "../../styles/Home.module.css"
import { useState } from "react";
import Link from 'next/link'
import ConnectButton from '../buttons/connectButton'


export const NavAlone = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={styles} className="bg-white w-full h-20 border-b border-gray-200 top-0 sticky">
            <nav>

                <div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                            <a
                                href="/"
                                aria-label="Company"
                                title="Company"
                                className="inline-flex items-center mr-8"
                            >
                                <img src="images/swootte_logo_black.svg" className="h-10" >
                                    
                                </img>
                            </a>
                            
                        </div>

                        
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default NavAlone