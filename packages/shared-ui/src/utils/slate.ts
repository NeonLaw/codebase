import { Node } from 'slate';

export const  convertSlateToPlaintext = (slateJson: any) => {
  return slateJson.map(n => Node.string(n)).join('\n');
};
