import { Box, Input } from '@chakra-ui/core';
import React, { useState } from 'react';

export const StringQuestion = ({ prompt }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  return (
    <Box>
      <Input value={value} placeholder={prompt} onChange={handleChange} />
    </Box>
  );
};
