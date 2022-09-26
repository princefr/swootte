
import { useLazyQuery } from "@apollo/client";
import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"
import onClickOutside from "react-onclickoutside";
import { SEARCH_USER } from "../../queries/searchUser";
import { ContactItemSearch } from "../contacts/items/ContactItem";



const ResultItems = ({ loading, error, data }) => {
    if (loading) return <p className="p-2">Loading ...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            {
                data.searchUser.map((result) => {
                    
                    switch (result.__typename) {
                        case "UserSmall":
                            return <ContactItemSearch key={result._id} contact={result}></ContactItemSearch>
                        case "Transaction":
                            return <div>dddd</div>
                        default:
                            return <div>dddd</div>
                    }
                })
            }
        </div>
    )
}

const SearchNavBar = () => {
    const [text, setText] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [searchUser, { loading, error, data }] = useLazyQuery(SEARCH_USER)

    useEffect(() => {
        text.length > 0 ? setIsOpen(true) : setIsOpen(false)
    }, [text])

    useEffect(() => {
        text.length > 0 ? searchUser({ variables: { searchText: text } }) : null
    }, [text])



    SearchNavBar.handleClickOutside = () => setIsOpen(false)

    return (
        <div className="relative inline-block text-gray-600 mx-7">
            <div className="flex h-full w-full">
                <input type="text" value={text} onChange={((e) => setText(e.target.value))} name="text" placeholder="Rechercher: transaction, contact, retrait ..." className="h-10 px-5 pr-10 text-sm focus:outline-none  w-96  font-montserrat bg-gray-100 rounded-lg  outline-none" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>


            <Transition show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">


                <div div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <ResultItems loading={loading} error={error} data={data}></ResultItems>
                    </div>

                </div>
            </Transition>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => SearchNavBar.handleClickOutside
};

export default onClickOutside(SearchNavBar, clickOutsideConfig);