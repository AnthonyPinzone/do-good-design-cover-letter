import React from 'react';
import CandidateQuestion from './CandidateQuestion';
import CandidateAnswer from './CandidateAnswer';

const CandidateQuestionAnswer = ({ id, question, answer }) => (
    <section id={id} className="candidate-question-answer">
        <div className="container">
            <CandidateQuestion>{question}</CandidateQuestion>
            <CandidateAnswer answer={answer} />
        </div>
    </section>
);

export default CandidateQuestionAnswer;