import { Transition } from "@headlessui/react";



export default function CookieBanner({showCookieBanner, setShowCoockieBanner}){
    return (
        <Transition show={showCookieBanner}>
            <div className=" inline-block w-full transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500">
                <section className="w-full p-10  lg:px-24 absolute bottom-0  bg-blue-600">
                <div className="md:flex items-center -mx-3">
                    <div className="md:flex-1 px-3 mb-5 md:mb-0">
                        <p className="text-center md:text-left text-white text-xs leading-tight md:pr-12">We and selected partners and related companies, use cookies and similar technologies as specified in our Cookies Policy. You agree to consent to the use of these technologies by clicking Accept, or by continuing to browse this website. You can learn more about how we use cookies and set cookie preferences in Settings.</p>
                    </div>
                    <div className="px-3 text-center">
                        <button id="btn" className="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl mr-3">Cookie settings</button>
                        <button id="btn" className="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl">Accept cookies</button>
                    </div>
                </div>
                </section>
            </div>
        </Transition>

        

    )
}