import React from 'react'
import './Faq.scss'
import { Plus } from 'iconoir-react';

export default function Faq() {

    const showFaq = (e) => {

        const checkIfOpen = document.querySelector('.openFaq');

        if (checkIfOpen === null) {

            const target = e.target;
            const getParentNode = target.parentNode.parentNode
            getParentNode.classList.add("openFaq")

        } else{

            checkIfOpen.classList.remove('openFaq');

            const target = e.target;
            const getParentNode = target.parentNode.parentNode
            getParentNode.classList.add("openFaq")
        }

        
    }

    const hideFaq = (e) => {

        

    }

  return (
    
    <div className="faqs fullpad pad-x">

            <div className="faqSection">

                <div className="faq openFaq">

                    <div className="text-faq">

                        <div className="q">
                        
                            What is LASRIC, and what does it aim to achieve?
                    
                        </div>

                        <div className="a">

                            LASRIC, the Lagos State Science, Research, and Innovation Council, was established to drive Lagos State’s economic growth by fostering innovation, science, and technology development. It provides support for startups, researchers, and innovative projects that can contribute to the state's social and economic transformation.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) } > <Plus /> <div className="overlay"></div> </div>


                </div>

                <div className="faq">

                    <div className="text-faq">

                    <div className="q">
                        
                        Who can apply for LASRIC funding or support?

                    </div>

                    <div className="a">
                    
                        Our insurance policy covers your shipment from origin to destination.
                    
                    </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <Plus/> <div className="overlay"></div> </div>

                </div>

                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                        
                            How do I apply for a LASRIC grant?

                    
                        </div>

                        <div className="a">

                            Payment validates shipment requests and gives us a go ahead to process your receipt.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <Plus/> <div className="overlay"></div> </div>

                </div>

                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                        
                            What kinds of projects does LASRIC typically fund?
                    
                        </div>

                        <div className="a">

                            Yes, you can generate all your shipment history and asset efficiency at the click of a button

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <Plus/> <div className="overlay"></div> </div>

                </div>

                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                        
                            How does LASRIC support the growth of startups beyond funding?
                    
                        </div>

                        <div className="a">

                            Yes, you can generate all your shipment history and asset efficiency at the click of a button

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <Plus/> <div className="overlay"></div> </div>

                </div>

                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                        
                            What is the selection process for receiving LASRIC support?
                    
                        </div>

                        <div className="a">

                            Yes, you can generate all your shipment history and asset efficiency at the click of a button

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <Plus/> <div className="overlay"></div> </div>

                </div>

        </div>

    </div>

  )
}
