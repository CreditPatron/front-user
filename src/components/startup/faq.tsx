import React from 'react';
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
const div_container = "container"
const h2_title = "text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading"
const div_questions = "max-w-4xl mx-auto"
const div_flex_questions = "flex-1 wow animate__animated animate__fadeIn"
const div_margin_questions = "px-4 mx-auto lg:ml-0"
const disclosure_animate = "leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
const disclosure_underline = "w-full font-bold border-b border-slate-200 py-3 flex justify-between items-center mt-4"
const disclosure_text = "text-gray-700 text-sm lg:text-base lg:font-medium mt-2"

const Faq: React.FC = () => {

  return (
      <>
        <section className="py-20" id="questions">
          <div className={div_container}>
            <div className={div_questions}>
              <div className={div_flex_questions} data-wow-delay=".3s">
                <div className={div_margin_questions}>
                  <h3 className={h2_title}>FAQ</h3>
                  <div>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        W jaki sposób inwestuję?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Inwestujesz z poziomu panelu użytkownika poprzez dokonanie płatności.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        Jak znajdę wniosek znajomego?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Osoba znajoma przekazuje Ci odpowiedni numer identyfikacyjny, po którym wyszukasz odpowiedni
                              wniosek.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        Czy mogę zmienić lub wycofać inwestycję podczas okresu finansowania?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Tak, przez cały okres finansowania wniosku kredytowego możesz zlecić wycofanie inwestycji.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        Czy mogę wycofać się z inwestycji po okresie finansowania?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Należy złożyć odpowiedni wniosek w panelu użytkownika. Czynność wymaga pokrycia opłaty
                              manipulacujnej.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        Czy moje dane pozostają anonimowe?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Tak, zarówno w czasie inwestowania jak i okresie spłaty Twoje dane pozostają anonimowe.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        W jaki sposób otrzymam odsetki od inwestycji?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Credit Patron przekazuje Ci odsetki z inwestycji na wskazane konto. Raty kredytu pobiera bank, zaś
                              Credit Patron odbiera od banku część srodków należnych inwestorom.
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className={disclosure_animate}>
                      {({open}) => (
                          <>
                            <Disclosure.Button className={disclosure_underline}>
                                                        <span>
                                                        W się dzieje w przypadku gdy kredyt nie jest spłacony?
                                                        </span>
                              <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className={disclosure_text}>
                              Bank uruchamia odpowiednie procedury odzyskania środków pienięznych (m.in. wykorzystując bankowy
                              tytuł egzekucyjny). Część należna inwestorom zostaje przekazana przez Credit Patron. Credit Patron
                              również na bieżąco informuje inwestorów o statusie kredytu (inwestycji).
                            </Disclosure.Panel>
                          </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Faq;