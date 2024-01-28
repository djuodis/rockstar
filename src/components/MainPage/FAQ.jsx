import React, { useState } from "react";

const FAQ = () => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleAnswer = (id) => {
    if (expandedQuestions.includes(id)) {
      setExpandedQuestions(expandedQuestions.filter((q) => q !== id));
    } else {
      setExpandedQuestions([...expandedQuestions, id]);
    }
  };
  return (
    <>
      <div className="faq">
        <div className="name">
          <h2>SOCIAL CLUB FAQ</h2>
        </div>
        <div className="questions">
          <div className="q1">
            <h4 onClick={() => toggleAnswer(1)}>What it is?</h4>
            <p
              id="answer-1"
              className={`answer ${
                expandedQuestions.includes(1) ? "show" : ""
              }`}
            >
              Join the Social Club! With over 100 million members worldwide, our
              official platform will help you get the most out of your Rockstar
              Games games.
            </p>
            <hr />
          </div>
          <div className="q2">
            <h4 onClick={() => toggleAnswer(2)}>How to verify my mail?</h4>
            <p
              id="answer-2"
              className={`answer ${
                expandedQuestions.includes(2) ? "show" : ""
              }`}
            >
              When you sign up for a Rockstar Games account, you will receive an
              email with a link to click in order to verify your account.
              Verifying your account makes you eligible for certain promotions
              and allows you to create a Crew.
            </p>
            <hr />
          </div>
          <div className="q3">
            <h4 onClick={() => toggleAnswer(3)}>
              What platforms does Social Club work on?
            </h4>
            <p
              id="answer-3"
              className={`answer ${
                expandedQuestions.includes(3) ? "show" : ""
              }`}
            >
              Social Club works only on PC.
            </p>
            <hr />
          </div>

          <div className="q6">
            <h4 onClick={() => toggleAnswer(6)}>
              How to Request the Deletion of Personal Information?
            </h4>
            <p
              id="answer-6"
              className={`answer ${
                expandedQuestions.includes(6) ? "show" : ""
              }`}
            >
              If you wish to delete your personal information, you can do so by
              requesting a Rockstar Games account Deletion using the Delete
              Account and Information option at the following URL:
              <a
                href="https://support.rockstargames.com/account/"
                target="_blank"
              >
                https://support.rockstargames.com/account/
              </a>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
