import { gql, useLazyQuery } from '@apollo/client';
import { AiOutlineSearch } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { gutters } from '../styles/neonLaw';
import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: ${gutters.xSmallOne} ${gutters.small};
  border: 1px solid #ddd ;
  box-shadow: 0 10px 20px rgba(0,0,0, .10);
  border-radius: 3px;
  transition: all .2s;

  &::placeholder {
    font-size: 20px;
    color: #555;
    font-weight: 300;
  }

  &:focus {
    box-shadow: 0 12px 22px rgba(0,0,0, .15);
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    right: ${gutters.small};
    transform: translateY(-50%);
    color: #bbb;
  }
`;

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
  const inputRef = useRef<any>();

  const handleSlashPress = (e) => {
    if (e.key === '/') {
      console.log(e.key);
      const activeEl = document.activeElement;
      const focusWrapper = document.querySelector('#focus-wrapper');

      if (activeEl === focusWrapper || activeEl === document.body) {
        e.preventDefault();
        inputRef.current?.focus({ preventScroll: true });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleSlashPress);

    return (): void => {
      window.removeEventListener('keydown', handleSlashPress);
    };
  }, []);

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
                <li key={index} data-testId="question">
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
    <StyledInputWrapper>
      <StyledInput
        name="type-ahead"
        ref={inputRef}
        type="text"
        value={text}
        placeholder="What legal question do you have?"
        onChange={onTextChange}
      />
      <AiOutlineSearch className="icon" size="1.5rem"/>
    </StyledInputWrapper>
  );
};
