import ConnnectButton from "../../components/buttons/ConnectButton"
import SwootteLogo from "../../components/logo/swootte"




const LandingNav = () => {
    return (
        <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12 space-x-6">
                        <a aria-label="Home" href="/#">
                            <SwootteLogo height={'h-10'} />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#features">Features</a>
                            <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#testimonials">Testimonials</a><a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#pricing">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">Sign in</a>
                        </div>
                        <ConnnectButton/>
                        <div className="-mr-1 md:hidden">
                            <div>
                                <button className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button" aria-expanded="false">
                                    <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition">
                                    </path>
                                        <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default LandingNav