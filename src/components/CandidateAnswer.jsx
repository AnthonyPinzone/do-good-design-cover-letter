import React from 'react';

const CandidateAnswer = ({ answer }) =>
    <div className="candidate-answer" dangerouslySetInnerHTML={{ __html: answer }} />;

export default CandidateAnswer;