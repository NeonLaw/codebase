import React, { PropsWithChildren, Ref } from 'react';
import { css, cx } from 'emotion';

interface BaseProps {
  className: string
  [key: string]: unknown
}
type OrNull<T> = T | null

const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
  ) => (
    <div
      {...props}
      className={cx(
        className,
        css`
          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )
);
Menu.displayName = 'Menu';

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
      )}
    />
  )
);

Toolbar.displayName = 'Toolbar';
