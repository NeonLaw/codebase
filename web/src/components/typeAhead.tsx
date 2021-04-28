import { gql, useLazyQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const QUERY = gql`
  query Questions {
    questions {
      nodes {
        id
        prompt
      }
    }
  }
`;

export const TypeAhead = () => {
  const [getQuestions, { loading, data }] = useLazyQuery(QUERY);
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState('');

  if (loading) return <p>Loading...</p>;

  if (data) {
    const questions = data?.questions?.nodes;
    return (
      <Box border="1px solid #bbb" padding="1em">
        <ul style={{listStyleType: 'none'}}>
          {questions.map((question, index) => {
            if (index > 4) {
              return null;
            }
            return (
              <>
                <li key={index}>
                  <Link href={`/questions/${question.id}`}>
                    {question.prompt}
                  </Link>
                </li>
              </>
            );
          })}
          <li>
            <em>
            Don&apos;t see your question above? Ask us in the chat below!
            </em>
          </li>
        </ul>
      </Box>
    );
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


  return (
    <>
      <Input
        type="text"
        value={text}
        placeholder="What legal question do you have?"
        onChange={onTextChange}
      />
    </>
  );
};
