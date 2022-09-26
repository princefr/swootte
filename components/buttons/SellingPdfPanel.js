import { useLazyQuery } from "@apollo/client";
import { Transition } from "@headlessui/react";
import { PrinterIcon, QrcodeIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import {QRCodeSVG} from "qrcode.react";
import { useContext, useState } from "react";
import { EnterpriseContext } from "../../context/EnterpriseContext";
import { QrCodeContext } from "../../context/QrCodeContext";
import { useNotification } from "../../notifications/NotificationContext";
import { GET_PAYMENT_PDF } from "../../queries/enterprise/getPDF";
import LoadingIcon from "../icons/LoadingIcon";




const SellingPdfPanel = () => {
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    const { qrCode, setQrCode } = useContext(QrCodeContext);
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    const [getPdfToPrint, {loading}] = useLazyQuery(GET_PAYMENT_PDF)
    const dispatch = useNotification()
    const router = useRouter()


    const print = (event) => {
        event.preventDefault()
        getPdfToPrint({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id
            }
        }).then((result) => {
            router.push(result.data.getPdf, '_blank')
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "ENTERPRISE",
                    message: "Votre bordereau de vente a été telechargé pour l'impréssion."
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "ENTERPRISE",
                    message: err.message
                }
            })
        })
    }

    return (
        <div className="relative inline-block text-left w-full">
            <button onClick={toggleModal} className="transition ease-out duration-700 w-full  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <QrcodeIcon className="h-6 w-6"></QrcodeIcon>
                <span className="font-montserrat text-xs">bordereau de vente</span>
            </button>

            <Transition show={showModal}>
                <div className="fixed z-40 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0 space-y-2">
                        <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>


                        </div>

                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>


                        <div className="relative flex flex-col items-center justify-center">
                            <button onClick={print} className="bg-white  p-2 flex flex-row space-x-2 items-center justify-center rounded-full">
                                <Transition show={loading}>
                                    <LoadingIcon/>
                                </Transition>
                                <Transition show={!loading}>
                                    <PrinterIcon className="h-5 w-5"/>
                                </Transition>
                                <span>imprimer</span>
                            </button>
                        </div>

                        <div className="relative w-auto h-screen mx-auto max-w-xl bg-white rounded-lg">
                            <div className="flex h-1/6 w-full flex-col items-center justify-center bg-[#FF5454]">
                                <div className="text-3xl font-semibold text-white">Tinda</div>
                                <div className="text-xl text-white font-thin">Tinda Payment</div>
                            </div>
                            <div className="flex h-4/6 w-full flex-col items-center justify-center">
                                <QRCodeSVG value={qrCode} className="h-60 w-60"  />
                                <div className="mt-2 text-xs font-thin">Paiement Tinda - Paiement sécurisé</div>
                            </div>
                            <div className="relative flex h-1/6 w-full">
                                <div className="absolute flex h-full w-full rounded-tr-full bg-[#FF5454] opacity-30"></div>
                                <div
                                    className="rounded-tr-m absolute bottom-0 flex h-5/6 w-full items-center justify-between rounded-tr-full bg-[#FF5454]">
                                    <div className="px-2">
                                        <svg fill="currentColor" className="h-10 w-10" viewBox="0 0 63 67" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.94579 65.8063C2.98289 66.5008 4.44347 66.3283 5.20808 65.421L33.553 31.7872C34.751 32.45 36.0301 32.9963 37.3668 33.4133L20.6227 53.2818C19.6657 54.4174 19.9422 56.0426 21.2403 56.9119C22.5384 57.7812 24.3665 57.5653 25.3235 56.4297L43.9112 34.3736C45.3205 34.3599 46.75 34.2074 48.1789 33.9045C58.5363 31.7087 64.9358 22.4442 62.4726 13.2115C60.0093 3.97891 49.616 -1.72558 39.2585 0.470178C29.5134 2.53611 23.2721 10.8596 24.6198 19.5266L6.5788 40.9339C5.62178 42.0695 5.89828 43.6947 7.19637 44.564C8.49446 45.4332 10.3226 45.2173 11.2796 44.0817L26.8833 25.5665C27.7129 26.8926 28.7276 28.0981 29.8898 29.1625L1.45238 62.906C0.687776 63.8133 0.90868 65.1118 1.94579 65.8063ZM53.0956 15.1994C51.864 10.5831 46.6674 7.73085 41.4886 8.82873C36.3099 9.92661 33.1101 14.5589 34.3418 19.1752C35.5734 23.7915 40.7701 26.6437 45.9488 25.5459C51.1275 24.448 54.3273 19.8157 53.0956 15.1994ZM43.8809 23.5583C47.8732 23.5583 51.1097 20.6734 51.1097 17.1146C51.1097 13.5558 47.8732 10.6708 43.8809 10.6708C39.8885 10.6708 36.652 13.5558 36.652 17.1146C36.652 20.6734 39.8885 23.5583 43.8809 23.5583Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="flex -translate-x-8 flex-row space-x-4">
                                        <button
                                            className="ml-4 mt-0 inline-flex items-center rounded-lg bg-white py-1 px-1 hover:bg-gray-200 focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4"
                                                viewBox="0 0 305 305">
                                                <path
                                                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
                                                </path>
                                                <path
                                                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
                                                </path>
                                            </svg><span className="ml-4 flex flex-col items-start leading-none"><span
                                                className="text-xs text-gray-600">Disponible</span><span
                                                    className="title-font text-xs font-medium">App Store</span></span>
                                        </button>
                                        <button
                                            className="ml-4 mt-0 inline-flex items-center rounded-lg bg-white py-1 px-1 hover:bg-gray-200 focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                                                </path>
                                            </svg><span className="ml-4 flex flex-col items-start leading-none"><span
                                                className="text-xs text-gray-600">Disponible</span><span
                                                    className="title-font text-xs font-medium">Google Play</span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Transition>
        </div>
    )
}



export default SellingPdfPanel