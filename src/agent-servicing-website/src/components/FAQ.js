import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Capital One Questions
  const faqData = [
    {
      id: 1,
      question: "How do you apply my payments?",
      answer:
        "We generally apply payments up to your minimum payment first to the balance with the lowest APR, and then to balances with higher APRs. We apply any part of your payment exceeding your minimum payment to the balance with the highest APR, and then to balances with lower APRs.",
    },
    {
      id: 2,
      question:
        "What information does Capital One require when I apply for a credit card?",
      answer:
        "You'll need to provide personal information, including your: Full name, Social Security number, Date of birth, Physical address (No P.O. Boxes), Estimated gross annual income, Checking and/or savings account information.",
    },
    {
      id: 3,
      question: "How can I report a lost or stolen credit card?",
      answer:
        "Reporting your lost or stolen card online is the fastest way to start the process of getting a replacement card. When you do that, we’ll deactivate your old card so no one else can use it, and you can tell us if there are purchases on your account you didn’t make. If you can't complete the process online, call 1-800-955-7070. If you are a small business customer, call 1-800-867-0904. From outside the United States, call our collect number at (804) 934–2001.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "Simply click the 'Help' button and select 'Advisor' or 'Contact Us' for additional customer support.",
    },
    {
      id: 5,
      question: "How can I find out the status of my credit card application?",
      answer:
        "If you apply by phone or online, you will often get a response in 60 seconds. However, in some cases we need to collect additional information to make a decision. You can check the status of your application anytime by calling 1-800-903-9177. We will notify you in writing of our decision within 7 to 10 days of your application.",
    },
    {
      id: 6,
      question: "When will I receive my new credit card?",
      answer:
        "If you’re approved, you should receive your Capital One card, credit limit information, and welcome materials by mail within approximately 7 to 10 business days. However, customers approved for a Secured Mastercard card will need to pay the deposit in full before the card ships—then it should be approximately 7 to 10 business days.",
    },
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const closePopup = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-grid">
        {faqData.map((faq) => (
          <button
            key={faq.id}
            className="faq-question-btn"
            onClick={() => handleQuestionClick(faq.id)}
          >
            {faq.question}
          </button>
        ))}
      </div>

      {/* Popup */}
      {selectedQuestion && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <h2>
              {faqData.find((faq) => faq.id === selectedQuestion)?.question}
            </h2>
            <p>{faqData.find((faq) => faq.id === selectedQuestion)?.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
