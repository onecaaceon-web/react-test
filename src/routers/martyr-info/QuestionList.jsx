import React from 'react';
import { presetQuestions } from '../../data/data';

const QuestionList = ({ onQuestionClick, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="questions-container" onClick={(e) => e.stopPropagation()}>
        <div className="questions-grid">
          <div className="questions-column">
            {presetQuestions.slice(0, 5).map((question, index) => (
              <button 
                key={index} 
                className="question-button" 
                onClick={() => onQuestionClick(question)}
              >
                {question}
              </button>
            ))}
          </div>
          <div className="questions-column">
            {presetQuestions.slice(5, 10).map((question, index) => (
              <button 
                key={index + 5} 
                className="question-button" 
                onClick={() => onQuestionClick(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;