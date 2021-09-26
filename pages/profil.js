

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Dashboard from "../components/dashboard/dashboard";
import FirebaseClient from "../utils/firebase";
import firebase from 'firebase/app'
import "firebase/storage"
import { useNotification } from "../notifications/NotificationContext";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFIL_PICTURE } from "../mutation/updateProfilePicture";
import { CameraIcon } from "@heroicons/react/solid";
import { SpinLogo } from "../components/items/productItem";
import { Transition } from "@headlessui/react";



export function PhotoViewWithUpload({ photoUrl, height, width, refetch }) {
    FirebaseClient()
    const dispatch = useNotification()

    const [UpdateProfilPicture, { loading }] = useMutation(UPDATE_PROFIL_PICTURE)


    const handlePicture = (binary) => {
        console.log(binary)
        const storage = firebase.app().storage("gs://" + process.env.NEXT_PUBLIC_firebase_storageBucket);
        const ref = "user/" + firebase.auth().currentUser.uid + "/photoUrl" + ".jpg"

        return storage.ref(ref).putString(binary, 'data_url').then(async () => {
            const url = await storage.ref(ref).getDownloadURL()
            return UpdateProfilPicture({
                variables: {
                    link: url
                }
            }).then(() => {
                dispatch({
                    payload: {
                        type: "SUCCESS",
                        title: "Photo",
                        message: "Votre photo a été publié"
                    }
                })
                refetch()
            })
                .catch((e) => {
                    dispatch({
                        payload: {
                            type: "ERROR",
                            title: "Photo",
                            message: e.message
                        }
                    })
                })
        })






    }

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            handlePicture(binaryStr)
        }
        reader.readAsDataURL(file)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    return (
        <div className="relative items-center" {...getRootProps()}>
            <div className={`h-10 w-10 bg-black bottom-0 flex items-center justify-center right-0 absolute rounded-full`}>
                <input className=" bg-gray-300" {...getInputProps()} />
                <Transition show={loading} className="justify-center">
                    <SpinLogo height={"h-4"}></SpinLogo>
                </Transition>
                <Transition show={!loading}>
                    <CameraIcon className="h-4 w-4 text-white"></CameraIcon>
                </Transition>

            </div>

            <Transition show ={photoUrl == null}>
                <div className={`h-${height} w-${width} bg-gray-200 rounded-full`}>
                    <svg className={`h-${height} w-${width} rounded-full text-gray-400`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </Transition>

            <Transition show={photoUrl != null}>
            <img src={photoUrl} className="w-32 h-32 object-cover group-hover:shadow group-focus:shadow  rounded-full"

alt="user picture"
/>
            </Transition>

        </div>

    )
}

const FormProfil = (props) => {
    const { loading, error, data, refetch } = props
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start px-14 p-4">


            </header>


            <div className="flex flex-col py-4 px-14 items-center">
                <div className="flex items-center">
                    <PhotoViewWithUpload photoUrl={data.usersExist.photoUrl} height={36} width={36} refetch={refetch}></PhotoViewWithUpload>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-10">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Informations
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Mes informations personelles.
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data.usersExist.first_name}  {data.usersExist.last_name}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Website
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    https://www.google.fr
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data.usersExist.email}
                                </dd>
                            </div>

                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Birthday
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    16/06/1991
                                </dd>
                            </div>

                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Country
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data.usersExist.country}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Adress
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    13 avenue de savigny, 93600, Aulnay-sous-bois.
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Phone number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data.usersExist.phonenumber}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Conditions d'utilisation du service
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Agréé le 17 avr. à 11:03
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Attachments
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">

                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    resume_back_end_developer.pdf
                                                </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">

                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    coverletter_back_end_developer.pdf
                                                </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Profil = () => {
    return (
        <Dashboard pageName={"Profil"}>{
            <FormProfil></FormProfil>
        }</Dashboard>

    )
}




export default Profil

