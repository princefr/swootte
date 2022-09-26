

import Link from "next/dist/client/link"
import { Transition } from "@headlessui/react";
import { NavButtonSkeleton } from "../../navButtons";
import { useState } from "react";


const SideBarSkeleton = props => {
    const [count, setCount] = useState([{"icon": 0}, {"icon": 1}, {"icon": 2}, {"icon": 3}, {"icon": 4}])

	return (
		<div className="flex flex-col items-center w-16 h-full m-0 overflow-hidden text-gray-700 fixed  bg-white border-r">
			<div className="flex flex-col items-center mt-1 space-y-2 border-gray-300">
				{count.map((button, index) => (
					<NavButtonSkeleton key={index}/>
				))
				}
			</div>

		</div>

	)
}


export default SideBarSkeleton