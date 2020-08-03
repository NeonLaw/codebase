import { Box, Textarea } from '@chakra-ui/core';
import React, { useState } from 'react';


export const TextQuestion = ({ prompt }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  return (
    <Box>
      <Textarea value={value} placeholder={prompt} onChange={handleChange} />
    </Box>
  );
};
