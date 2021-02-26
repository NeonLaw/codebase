import { Breadcrumbs } from '../../../components/breadcrumbs';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import {
  QuestionnaireDetailView
} from '../../../components/detailViews/questionnaireDetailView';
import React from 'react';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const BarMobilityQuestionnaire = ({ params: { questionnaireId }}) => {
  return (
    <PortalLayout>
      <Breadcrumbs showHome={false} />
      <QuestionnaireDetailView id={questionnaireId} />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default BarMobilityQuestionnaire;
