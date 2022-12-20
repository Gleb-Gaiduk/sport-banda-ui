/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import {
  ButtonPriority,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from 'components/inputs/buttons/Button/Button.types';
import React from 'react';
import { RefTypeForElement } from 'types/react-core.types';
import './Button.scss';

type ButtonContentProps<Element extends React.ElementType> = Pick<
  ButtonProps<Element>,
  'children' | 'leftIcon' | 'rightIcon'
>;

function ButtonContent<Element extends React.ElementType>(props: ButtonContentProps<Element>) {
  const { leftIcon, rightIcon, children } = props;

  return (
    <>
      {/* {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>} */}
      {children}
      {/* {rightIcon && <ButtonIcon>{leftIcon}</ButtonIcon>} */}
    </>
  );
}

type DefaultElement = 'button';

type ButtonComponent = <Element extends React.ElementType = DefaultElement>(
  props: ButtonProps<Element>,
) => React.ReactElement | null;

const Button: ButtonComponent = React.forwardRef(
  <Element extends React.ElementType = DefaultElement>(
    {
      as,
      children,
      className,
      variant = ButtonVariant.CONTAINED,
      priority = ButtonPriority.PRIMARY,
      size = ButtonSize.MEDIUM,
      isDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      textWhileLoading = 'Loading...',
      type = 'button',
      spinner,
      spinnerPlacement = 'end',
      dataTest,
      ...rest
    }: ButtonProps<Element>,
    ref?: RefTypeForElement<Element>,
  ) => {
    const ButtonTag = as || 'button';
    const contentProps = { rightIcon, leftIcon, children };

    const composedCn = cn('SbButton', {
      className,
      SbButton_variant_text: variant === ButtonVariant.TEXT,
      SbButton_variant_shadowed: variant === ButtonVariant.SHADOWED,
      SbButton_variant_contained: variant === ButtonVariant.CONTAINED,
      SbButton_variant_outlined: variant === ButtonVariant.OUTLINED,
      SbButton_priority_primary: priority === ButtonPriority.PRIMARY,
      SbButton_priority_secondary: priority === ButtonPriority.SECONDARY,
      SbButton_size_xs: size === ButtonSize.XSMALL,
      SbButton_size_sm: size === ButtonSize.SMALL,
      SbButton_size_md: size === ButtonSize.MEDIUM,
      SbButton_size_lg: size === ButtonSize.LARGE,
    });

    return (
      <ButtonTag
        className={composedCn}
        ref={ref}
        disabled={isDisabled || isLoading}
        type={type}
        data-test={dataTest}
        {...rest}
      >
        {/* {isLoading && spinnerPlacement === 'start' && <ButtonSpinner>{spinner}</ButtonSpinner>} */}
        {isLoading ? textWhileLoading : <ButtonContent {...contentProps} />}
        {/* {isLoading && spinnerPlacement === 'end' && <ButtonSpinner>{spinner}</ButtonSpinner>} */}
      </ButtonTag>
    );
  },
);

export { Button };
