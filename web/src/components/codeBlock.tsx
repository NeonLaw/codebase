import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

export const CodeBlock = ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language="javascript"
    >
      {({ className, tokens, getLineProps, getTokenProps }: any) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ key: i, line })}>

              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ key, token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
