import React, { useState } from 'react';

import { questions } from '../../contents';
import styled from '@emotion/styled';

const Styled = styled.div``;

export const TypeAhead = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');

  const onTextChange = (e) => {
    const items = questions;
    let suggestions = [];
    const value = e.target.value;

    if (value.length > 0) {
      suggestions = items.filter((i) => i.includes(value));
      //   const regex = new RegExp(`^${value}`, 'i');
      //   console.log(items.sort());
      //   suggestions = items.sort().filter((v) => regex.test(v));
    }

    setSuggestions(suggestions.slice(0, 10));
    setText(value);
  };

  const renderQuestions = () => {
    const questions = suggestions;

    return questions.length ? (
      <ul>
        {questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <Styled>
      <input
        type="text"
        value={text}
        placeholder="What legal question do you have ?"
        onChange={onTextChange}
      />
      {renderQuestions()}
    </Styled>
  );
};
