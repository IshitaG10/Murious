import React, { useState } from "react";
import './FAQ.css'
import Header from './Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

function FAQ() {
  const [isOpen1, setIsOpen1] = useState(false)
  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }
  const [isOpen2, setIsOpen2] = useState(false)
  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }
  return (
  <div>
    <div className="faq">
      <Header/>
      <div className="faq-name">
        <div className="ques-1">
          <div className={`ques-wrapper-1 ${isOpen1 ? 'ques-wrapper-1-active' : ''} `}>
            <div className="ques-heading">
              <div className="ques-heading-titlebox">
                <div className="ques-heading-m">What is murious for?</div>
                <div onClick={onClickEvent1} className="more-options-m">
                  <div className="more-option-show">
                    <FontAwesomeIcon icon={faAngleDown}/>
                  </div>
                  <div className="more-option-hide"></div>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  fhgjhkjnlkmlkmlkmm
                </div>
              </div>
            </div>
          </div> 
          <div className="ques-2">
            <div className={`ques-wrapper-2 ${isOpen2 ? 'ques-wrapper-2-active' : ''} `}>
              <div className="ques-heading">
                <div className="ques-heading-titlebox">
                  <div className="ques-heading-m">What is murious for?</div>
                  <div onClick={onClickEvent2} className="more-options-m">
                    <div className="more-option-show">
                      <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    <div className="more-option-hide"></div>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    dcnvjhbjknklj;lml;jkojigfgdcgc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default FAQ