import 'tailwindcss/tailwind.css'
import { UserContext } from '../context/UserContext'
import { useState, useMemo } from 'react';
import { SideBarMenuContext } from '../context/SideBarMenuContext';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])



  // pageName , isActive
  const [sidemenu, setActiveMenu] = useState([{pageName: "home", isActive: true}, {pageName: "balance", isActive: false}, {pageName: "transferts", isActive: false}, {pageName: "users", isActive: false}])
  const sideMenuValue = useMemo(() => ({sidemenu, setActiveMenu}), [sidemenu, setActiveMenu])

  return <UserContext.Provider value={providerValue}>
    <SideBarMenuContext.Provider value={sideMenuValue}>
      <Component {...pageProps} />
    </SideBarMenuContext.Provider>
  </UserContext.Provider>
}

export default MyApp
