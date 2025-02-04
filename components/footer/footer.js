import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SUSCRIBE_TO_NEWS_LETTER } from "../../mutation/SuscribeToNewsLetter";
import { useNotification } from "../../notifications/NotificationContext";
import Link from 'next/link'
import useLocalization from "../../hooks/useLocalization";

const SuscribeToNewsletter = () => {
  const [email, setEmail] = useState("")
  const [Suscribe, { loading }] = useMutation(SUSCRIBE_TO_NEWS_LETTER)
  const dispatch = useNotification()
  const localization = useLocalization()


  const handleSuscribe = (event) => {
    event.preventDefault()
    Suscribe({
      variables: {
        email: email
      }
    }).then((result) => {
      dispatch({
        payload: {
          type: "SUCCESS",
          title: "Suscribe",
          message: "Thank you for subscribing to our newsletter"
        }
      })
    }).catch((err) => {
      dispatch({
        payload: {
          type: "ERROR",
          title: "Suscribe",
          message: err.message
        }
      })
    })
  }
  return (
    <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
      <h6 className="text-white font-medium mb-2">{localization.FooterNewsLetterTitle}</h6>
      <p className="text-sm text-white mb-4">{localization.FooterNewsLetterDescription}</p>

      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <label className="block text-sm sr-only" htmlFor="newsletter">{localization.EmailViewContactUsEmailTitle}</label>
          <div className="relative flex items-center max-w-xs">
            <input id="newsletter" required value={email} onChange={((e) => setEmail(e.target.value))} type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder={localization.EmailViewContactUsEmailTitle} />
            <button onClick={handleSuscribe} className="absolute inset-0 left-auto" aria-label="Subscribe" disabled={!email.length}>
              <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
              {
                loading ? <svg className="animate-spin -ml-1 mr-3 w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>
              }

            </button>
          </div>
          {/* Success message */}
          {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
        </div>
      </div>

    </div>
  )
}


export const Footer = () => {
  const localization = useLocalization()
  return (
    <div className="relative mt-16 bg-black text-white">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-black"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <img src="images/Swootte_logo_white.svg" className="w-36" alt="swootte logo"></img>
            <div className="mt-4 lg:max-w-sm">
            {localization.FotterSwootteDescription}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Ressources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/tutorials"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Tutoriels et guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Centre d'assistance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Nos partenaires
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
              Informations pratiques
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Modalités et conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Gestion des cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    À propos de nous
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <SuscribeToNewsletter></SuscribeToNewsletter>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright {new Date().getFullYear()} Swootte ltd. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/swootteApp"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Swootte"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};