import React from 'react';
import { useAllFlashcardsQuery } from '@utils/api';

export const FlashcardTable = () => {
  const { loading, data, error } = useAllFlashcardsQuery();

  if (loading) {
    return (<h1>Loading</h1>);
  }
  if (error) {
    return (<h1>{error}</h1>);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Topic
          </th>
          <th>
            Prompt
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.allFlashcards?.nodes.map((flashcard, i) => (
          <tr key={i}>
            <td>
              {flashcard.topic}
            </td>
            <td>
              {flashcard.prompt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
