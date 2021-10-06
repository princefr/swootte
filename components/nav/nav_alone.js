import styles from "../../styles/Home.module.css"
import { SwootteLogo } from "../dashboard/nav";
import Link from "next/dist/client/link";


export const NavAlone = () => {

    return (
        <div style={styles} className="bg-white w-full h-16 border-b border-gray-200 top-0 sticky">
            <nav>

                <div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href={"/"}>
                                <a>
                                    <SwootteLogo height={"h-8"}></SwootteLogo>
                                </a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default NavAlone