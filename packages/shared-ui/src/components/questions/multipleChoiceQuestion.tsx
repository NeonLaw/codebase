import { Box, Text } from '@chakra-ui/core';
import CreatableSelect from 'react-select/creatable';
import React from 'react';

export const MultipleChoiceQuestion = ({ prompt, choices }) => {
  const handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  return (
    <Box>
      <Text>{prompt}</Text>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        options={choices}
      />
    </Box>
  );
};
