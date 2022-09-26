import Link from "next/link";

import { withRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

const NavButton = props => (
    <Link href={props.path}>
      <a className={`flex items-center justify-center w-12 h-12 mt-2 outline-none ${
        props.router.pathname === props.path ? "bg-black text-white" : "hover:bg-black hover:text-white"
      } `}>
        <div className="flex flex-col overflow-hidden">
            {props.icon}
            
            </div>
        <span className="Label hidden">{props.label}</span>
      </a>
    </Link>
  );
  
  export default withRouter(NavButton);



  export const NavButtonSkeleton = props => (
    <button className="flex items-center justify-center w-12 h-12 mt-2 outline-none ">
      <div className="flex flex-col">
          <Skeleton height={25} width={25}/>

          </div>
      <span className="Label hidden"><Skeleton/></span>
    </button>
  );
