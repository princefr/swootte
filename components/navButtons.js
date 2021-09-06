import Link from "next/link";

import { withRouter } from "next/router";

const NavButton = props => (
    <Link href={props.path}>
      <div className={`flex items-center justify-center w-12 h-12 mt-2 ${
        props.router.pathname === props.path ? "bg-roud text-white" : "hover:bg-roud hover:text-white"
      } `}>
        <div className="flex flex-col">
            {props.icon}
            
            </div>
        <span className="Label hidden">{props.label}</span>
      </div>
    </Link>
  );
  
  export default withRouter(NavButton);