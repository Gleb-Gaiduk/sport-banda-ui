import { MultiElementComponentPropsWithRef } from 'types/react-core.types';

export enum ButtonVariant {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  SHADOWED = 'shadowed',
}

export enum ButtonPriority {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  XSMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export type ButtonProps<Element extends React.ElementType> = MultiElementComponentPropsWithRef<
  Element,
  {
    isDisabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    priority?: ButtonPriority;
    isLoading?: boolean;
    textWhileLoading?: string;
    type?: 'button' | 'reset' | 'submit';
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    spinner?: React.ReactElement;
    spinnerPlacement?: 'start' | 'end';
  }
>;
