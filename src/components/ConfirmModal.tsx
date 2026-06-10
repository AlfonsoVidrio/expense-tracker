import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

type ConfirmModalProps = {
    show: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    message: string
}

export const ConfirmModal = ({ show, onClose, onConfirm, title, message }: ConfirmModalProps) => {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/75" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex flex-col items-center gap-4">
                                    <ExclamationTriangleIcon className="w-16 h-16 text-pink-600" />

                                    <Dialog.Title className="text-2xl font-black text-center">
                                        {title}
                                    </Dialog.Title>

                                    <p className="text-gray-600 text-center">
                                        {message}
                                    </p>

                                    <div className="flex gap-4 mt-4">
                                        <button
                                            type="button"
                                            className="bg-gray-200 w-32 p-2 text-gray-600 uppercase font-bold rounded-lg hover:bg-gray-300"
                                            onClick={onClose}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-pink-600 w-32 p-2 text-white uppercase font-bold rounded-lg hover:bg-pink-700"
                                            onClick={onConfirm}
                                        >
                                            Resetear
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
