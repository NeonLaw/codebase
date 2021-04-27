import {
  MatterDetailScreen
} from '../../../../components/screens/matterDetailScreen';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/* eslint-disable-next-line import/no-default-export */
export default withPageAuthRequired(MatterDetailScreen);
