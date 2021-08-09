




function NotificationItem() {

    return (
        <div className="flex flex-row space-x-2 p-4 justify-between">
            <div className="h-2 w-2 bg-blue-800 rounded-full mt-4"></div>
            <div className="h-10 w-10 bg-red-800 rounded-full"></div>
            <div className="flow flex-col space-y-1 w-44">
                <div className="text-sm font-medium">Le cours va bientot commencer , veuillez rejoindre le cours</div>
                <div className="text-xs font-montserrat">il y'a 15 min</div>
            </div>
            <div className="h-16 w-24 bg-black">
                <img
                    className="h-16 w-24 object-cover group-hover:shadow group-focus:shadow "
                    src="//images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    alt="Avatar of Tailwind CSS Design"
                />
            </div>
        </div>
    )

}



export default NotificationItem