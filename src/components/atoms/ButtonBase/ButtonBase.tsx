import './button.css';
import type { LinkProps } from 'react-router-dom';
import React from 'react';
import s from './ButtonBase.module.scss';

interface IButtonBaseCommonProps {
  children: React.ReactNode;
  type?: JSX.IntrinsicElements['button']['type'];
  className: string;
  isDisabled?: boolean;
  LinkNode?: typeof React.Component<LinkProps, unknown>;
  href?: string;
  dataTest: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type IButtonBaseConditionalProps =
  | {
      LinkNode?: typeof React.Component<LinkProps, unknown>;
      href?: string;
      onClick?: never;
    }
  | {
      LinkNode?: never;
      href?: never;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
    };

export type TButtonBaseProps = IButtonBaseCommonProps & IButtonBaseConditionalProps;

function ButtonBase({
  children,
  className,
  isDisabled = false,
  LinkNode,
  href,
  type,
  dataTest,
  onClick,
}: TButtonBaseProps) {
  if (typeof href === 'string' && LinkNode) return <LinkNode className={className} to={href} />;

  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      disabled={isDisabled}
      data-test={dataTest}
    >
      {children}
    </button>
  );
}

ButtonBase.name = 'ButtonBase';

export { ButtonBase };
