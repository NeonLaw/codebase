import React from 'react';
import { Spinner } from '@chakra-ui/core';
import { gutters } from '../themes/neonLaw';

interface SubmissionInProgressProps {
  loading: boolean;
}

export const SubmissionInProgress = ({ loading }: SubmissionInProgressProps) =>
  loading ? <Spinner marginLeft={gutters.xSmall} /> : null;
