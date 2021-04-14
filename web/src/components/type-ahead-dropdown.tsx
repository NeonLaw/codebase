import React, { useState } from 'react';

import styled from '@emotion/styled';

const QUERY = `
  query Questions {
    questions {
      nodes {
        nodeId
        prompt
      }
    }
  }
`;

const API_URL = 'http://api.neonlaw.com/graphiql';

const opts = {
  body: JSON.stringify({ QUERY }),
  method: 'POST',
};

const Styled = styled.div``;

export const TypeAhead = () => {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState('');

  const fetchQuestions = async () => {
    fetch(API_URL, opts).then((res) => console.log(res));
  };

  const onTextChange = (e) => {
    // const items = [];
    // let questions = [];
    const value = e.target.value;

    if (value.length > 0) {
      fetchQuestions();
    }

    setQuestions(questions.slice(0, 10));
    setText(value);
  };

  // const renderQuestions = () => {
  //   const questions = questions;

  //   return questions.length ? (
  //     <ul>
  //       {questions.map((q) => (
  //         <li key={q}>{q}</li>
  //       ))}
  //     </ul>
  //   ) : null;
  // };

  return (
    <Styled>
      <input
        type="text"
        value={text}
        placeholder="What legal question do you have ?"
        onChange={onTextChange}
      />
      {/* {renderQuestions()} */}
    </Styled>
  );
};
