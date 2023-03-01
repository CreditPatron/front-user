import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState, useRef} from "react";
import {CheckIcon} from "@heroicons/react/outline";

const SubmitApplyFundingFormModalWindow: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => setModalOpen(false);
  const cancelButtonRef = useRef(null);

  const applyFunding = () => {
    setModalOpen(true);
  }

  return (
      <>
        <div className="flex justify-start space-x-2">
          <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 duration-500">
            Anuluj
          </button>
          <button
              onClick={applyFunding}
              type="submit"
              className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-slate-700 border border-transparent shadow-sm rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 duration-500">
            Wyślij
          </button>
        </div>

        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0 bg-gray-900/25" />
              </Transition.Child>

              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                <div className="relative inline-block w-full max-w-md p-4 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 dark:text-white transition-all transform rounded-2xl space-y-4">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                      <CheckIcon
                          className="w-6 h-6 text-green-600"
                          aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                          as="h3"
                          className="text-lg font-medium text-gray-900 dark:text-white">
                        Złożony wniosek
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-white">
                          Twój wniosek został złony. Nasz zaspół w przeciągu 1 dnia roboczego opublikuje Twój wniosek lub skontaktuje się z Tobą. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 m-2 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                        type="button"
                        className="w-full px-4 py-3 text-xs font-bold text-blue-500 dark:text-white uppercase bg-transparent dark:hover:bg-gray-800 border border-blue-500 dark:border-white hover:text-blue-700 dark:hover:text-white hover:border-blue-700 dark:hover:border-white rounded-lg"
                        onClick={() => setModalOpen(false)}>
                      Deaktywuj
                    </button>
                    <button
                        type="button"
                        className="w-full px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600"
                        onClick={() => setModalOpen(false)}
                        ref={cancelButtonRef}>
                      Zamknij
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
  );
};

export default SubmitApplyFundingFormModalWindow;
