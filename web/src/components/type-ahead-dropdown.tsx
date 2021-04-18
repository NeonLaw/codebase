import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import styled from '@emotion/styled';

const QUERY = gql`
  query Questions {
    questions {
      nodes {
        nodeId
        prompt
      }
    }
  }
`;

const Styled = styled.div``;

export const TypeAhead = () => {
  const [getQuestions, { loading, data }] = useLazyQuery(QUERY);
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState('');

  if (loading) return <p>Loading...</p>;

  if (data) {
    console.log(data);
  }

  const onTextChange = (e) => {
    // const items = [];
    // let questions = [];
    const value = e.target.value;

    if (value.length > 2) {
      getQuestions();
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
