import React from 'react'
import ScrollToTop from "react-scroll-to-top";

// COMPONENT
import FaqQuestion from '../../components/faq-question/faq-question.component'
import ContactSection from '../../components/sections/contact-section/contact-section.component'

// DATA


import './faq.style.scss'
export default function Faq() {
  return (
    <div className="faq">
        <div className="faq__hero">
            <h1 className='faq__hero--heading'>
                <span>Frequently</span>
                <span>Asked</span>
                <span>Questions</span>
            </h1>
        </div>
        <div className="faq__questions">
            <FaqQuestion
                question='What are the pots made of?'
                answer="We only sell plants in terracotta pots. No plastic, no ceramic, no other medium. Plants breathe better in terracotta pots. We have an article about it in our blog."
            />
            <FaqQuestion
                question='Can I just buy the plant without the pot?'
                answer="We sell all of our plants in pots. However, there are some plants that we sometimes consider selling without it."
            />
            <FaqQuestion
                question='Can I send a note with my plant? It’s a gift.'
                answer="Yes, sure! We take our sweet time to wrap the plant like the prettiest gift one can get. The note is usually written on  a cartridge paper. You can customize your note upon paying a very little amount which goes straight to the origami businesses led by school students."
            />
            <FaqQuestion
                question='When will I get my plant?'
                answer="Ideally, within a week. However, we do not think twice when you’ve forgotten to buy a gift for your loved ones and need to be rescued within a day. We have urgent delivery options. In scary cases, cases like forgetting anniversaries, we deliver within 5 hours too, depending on the location."
            />
            <FaqQuestion
                question='How do I take care of my plant?'
                answer="When we post about plants, we write a brief description about the plant care. If you still feel unsure, reach out to us through our social media group where we have experts assigned to help you. No one will judge you there."
            />
            <FaqQuestion
                question='Will you give us a care guide along with the plant?'
                answer="Sure! We gotchu!"
            />
            <FaqQuestion
                question='I think my plant is dying. What should I do?'
                answer="Take a deep breath. Take a photo of the plant and send that to us through email. Explain the problem. We will personally see how to revive your plant buddy."
            />
            <FaqQuestion
                question='I have never cared for plants. What if I kill it?'
                answer="We have been planting for 25 years and killed our fair share of plants. We have over a thousand varieties of plants now. It is all part of the journey. We will be there for you to guide you. Don’t worry! If you kill it as a beginner, we will refill the pot free of charge, but you just have to keep at it, understand it and enjoy the learning process."
            />
            <FaqQuestion
                question='Do you sell fertilizers?'
                answer="Yes! We sell all types of them. Do consult with us before buying one. Not all plants need the same fertilizer. We can help you find the right one."
            />
            <FaqQuestion
                question='Do you sell pots separately?'
                answer="Yes! Infact, we sell a huge range of other plant products such as organic pesticides, medicines, plant hangers etc. All of our products are eco-friendly."
            />
            <FaqQuestion
                question='Can I customize the design of my pot?'
                answer="Yes! Shoot us an email. We are all ears!"
            />
        </div>
        <div className="faq__contact">
            <ContactSection/>
        </div>
    </div>
  )
}
