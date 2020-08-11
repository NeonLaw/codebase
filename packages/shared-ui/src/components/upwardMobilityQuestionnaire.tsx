import { Box, Progress } from '@chakra-ui/core';
import { decisionTree, questions } from '../components/upwardMobilityQuestions';

import {
  BeginUpwardMobilityQuestionnaire
} from '../components/beginUpwardMobilityQuestionnaire';
import {
  FinishUpwardMobilityQuestionnaire
} from '../components/finishUpwardMobilityQuestionnaire';
import React from 'react';
import {
  SingleChoiceQuestion
} from '../components/questions/singleChoiceQuestion';
import {
  SingleDateQuestion
} from '../components/questions/singleDateQuestion';
import { gutters } from '../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';
import { useParams } from '@reach/router';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const UpwardMobilityQuestionnaire = (props: any) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();

  const updateAnswers = (questionId, answer) => {
    const answers = JSON.parse(
      localStorage.getItem('upwardMobility.answers') || '{}'
    );
    answers[questionId] = answer;
    localStorage.setItem('upwardMobility.answers', JSON.stringify(answers));
  };

  const basePath = '/upward-mobility';

  const { questionId } = useParams();

  if (questionId.toLowerCase() === 'begin') {
    return <BeginUpwardMobilityQuestionnaire />;
  }

  if (questionId.toLowerCase() === 'end') {
    return <FinishUpwardMobilityQuestionnaire />;
  }

  const question = questions.find((question) => {
    return question.id === questionId;
  });

  if (!question || !question.prompt) {
    return (
      <span>{intl.formatMessage({ id: 'upwardMQ.missing_question' })}</span>
    );
  }

  const nextSteps = (node) => {
    return Object.keys(node).map((key) => {
      return node[key];
    });
  };

  const calculateProgress = (questionId: string, decisionTree): number => {
    // calculate the longest path forward between questionID & end
    const currentNode = decisionTree[questionId];

    let mostSteps = 0;
    const searchForEnd = (tree, node, steps = 0) => {
      steps = steps + 1;
      if (steps > mostSteps) {
        mostSteps = steps;
      }
      nextSteps(node).forEach((nextStep) => {
        if (nextStep == 'end') {
          return;
        }
        const nextNode = tree[nextStep];
        if (!nextNode) {
          return;
        }
        return searchForEnd(tree, nextNode, steps);
      });
    };
    searchForEnd(decisionTree, currentNode, 0);

    const totalSteps = Object.keys(decisionTree).length;

    return Math.floor(((totalSteps - mostSteps) / totalSteps) * 100);
  };

  return (
    <>
      <Box margin={`${gutters.large} 0 ${gutters.xSmallOne}`}>
        <Progress value={calculateProgress(question.id, decisionTree)} />
        <Box>
          {question.questionType === 'single-choice' && (
            <SingleChoiceQuestion
              updateAnswers={updateAnswers}
              questionnairePath={basePath}
              prompt={question.prompt}
              choices={question.choices || []}
              id={question.id}
              decisionTree={decisionTree}
            />
          )}
          {question.questionType === 'single-date' && (
            <SingleDateQuestion
              updateAnswers={updateAnswers}
              questionnairePath={basePath}
              prompt={question.prompt}
              id={question.id}
              decisionTree={decisionTree}
            />
          )}
        </Box>
      </Box>
    </>
  );
};
