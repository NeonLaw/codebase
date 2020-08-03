import { Box, Text } from '@chakra-ui/core';
import React, { useState } from 'react';


import { DatePicker } from 'react-datepicker';

export const DateTimeQuestion = (prompt) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box>
      <Text>{prompt}</Text>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </Box>
  );
};
