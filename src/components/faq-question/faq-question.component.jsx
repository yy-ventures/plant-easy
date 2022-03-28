import React, {useState} from 'react'

// ICON
import arrow from '../../assets/icon/down-arrow.png';

import './faq-question.style.scss'

export default function FaqQuestion({question, answer}) {

    const [active, setActive] = useState(false);

    const handleDropdown = () => {
        setActive(!active);
    }

  return (
    <div className='question-container' onClick={()=> handleDropdown()}>
        <div className="question-container__heading">
            <p className="question">{question}</p>
            <div className={active ? 'icon-container rotate' : 'icon-container'}>
                <img src={arrow} alt="arrow icon" />
            </div>
        </div>
        <div className={active ? "question-container__body active" : "question-container__body"}>
            <p>{answer}</p>
        </div>
    </div>
  )
}
