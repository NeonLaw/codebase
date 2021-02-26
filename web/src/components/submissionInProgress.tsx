import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { gutters } from '../styles/neonLaw';

interface SubmissionInProgressProps {
  loading: boolean;
}

export const SubmissionInProgress = ({ loading }: SubmissionInProgressProps) =>
  loading ? <Spinner marginLeft={gutters.xSmall} /> : null;
