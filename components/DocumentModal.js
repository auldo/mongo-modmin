import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

export default function DocumentModal(props) {

    const PrettyPrintJson = React.memo(({data}) => (<div><pre>{
        JSON.stringify(data, null, 2) }</pre></div>));

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div
                onClick={openModal}
                className="px-4 py-2 bg-gray-200 font-thin rounded hover:bg-gray-300 cursor-pointer"
            >
                {props.data._id.id}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center overflow-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Document
                                </Dialog.Title>
                                <div className="mt-2 overflow-auto">
                                    <PrettyPrintJson data={props.data} />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="py-2 px-5 bg-teal-600 hover:bg-teal-800 text-white rounded"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}