"use client"
import React, { useState } from 'react'

const FaqSection = () => {
    const [openFAQ, setOpenFAQ] = useState(1);

    const faqData = [
        {
            question: "What is the cost of a mobile application?",
            answer: "The cost of a mobile application varies widely based on complexity, features, and platform. Basic apps start at $10,000, while advanced apps with extensive functionality can exceed $100,000."
        },
        {
            question: "How long will development take?",
            answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.<br /><br />Average development time from start to finished application:<br />Medium projects up to <b>3 months</b>,<br />Large projects about <b>4-6 months</b>.<br />To get a more accurate assessment of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
        },
        {
            question: "Do you provide a guarantee for the mobile application?",
            answer: "We don't provide a guarantee for the mobile application, but we offer comprehensive support and maintenance to address any issues that arise post-launch."
        },
        {
            question: "I will not tell my idea, do you guarantee confidentiality?",
            answer: "Yes, we guarantee confidentiality. Your idea and any related information will be kept private and secure throughout the development process."
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8" id="faq">
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">FAQ</h2>
                <div className="flex flex-wrap -mx-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
                            <div className="border-b py-4">
                                <button
                                    className="flex justify-between items-center w-full text-left"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    <span className="font-bold text-lg">{faq.question}</span>
                                    <span>{openFAQ === index ? '-' : '+'}</span>
                                </button>
                                {openFAQ === index && (
                                    <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default FaqSection