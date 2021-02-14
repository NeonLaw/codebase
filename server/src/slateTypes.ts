import { makeWrapResolversPlugin } from 'graphile-utils';

const isValidSlateText = (helpText) => {
  return helpText.every(node => {
    return 'children' in node; }
  );
};

export const slatePlugin = makeWrapResolversPlugin({
  Mutation: {
    async createQuestion(resolve, source, args, context, resolveInfo) {
      const { helpText } = args.input.question;

      // A Slate JSON object is an array where every member
      // has the `children` property.
      if (!isValidSlateText(helpText)) {
        throw new Error('This is not valid Slate Text');
      }

      return await resolve(source, args, context, resolveInfo);
    },
    async updateQuestionById(resolve, source, args, context, resolveInfo) {
      const { helpText } = args.input.questionPatch;

      if (!isValidSlateText(helpText)) {
        throw new Error('This is not valid Slate Text');
      }

      return await resolve(source, args, context, resolveInfo);
    },
  },
});
