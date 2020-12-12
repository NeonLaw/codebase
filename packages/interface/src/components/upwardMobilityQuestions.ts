export const decisionTree = {
  bankruptcy: {
    No: 'debt-relief',
    Yes: 'when-did-you-file-for-bankruptcy',
  },
  begin: 'current-worth',
  'current-worth': {
    'I am barely managing to pay my bills': 'debt-relief',
    'I am saving a little bit every month': 'no-legal',
    'I have a lot of debt': 'bankruptcy',
    'I have more than I need': 'estate-planning',
  },
  'debt-relief': {
    '*': 'end'
  },
  'when-did-you-file-for-bankruptcy': {
    '*': 'debt-relief'
  }
};

export const questions = [
  {
    choices: [
      'I have a lot of debt',
      'I am barely managing to pay my bills',
      'I am saving a little bit every month',
      'I have more than I need',
    ],
    id: 'current-worth',
    prompt: 'Describe your current financial situtaion.',
    questionType: 'single-choice'
  },
  {
    choices: [
      'Yes',
      'No'
    ],
    id: 'bankruptcy',
    prompt: 'Have you filed for bankruptcy before?',
    questionType: 'single-choice'
  },
  {
    choices: [
      'Yes',
      'No'
    ],
    id: 'debt-relief',
    prompt: 'Have you considered debt relief?',
    questionType: 'single-choice'
  },
  {
    id: 'when-did-you-file-for-bankruptcy',
    prompt: 'When did you file for bankruptcy?',
    questionType: 'single-date'
  }
];
