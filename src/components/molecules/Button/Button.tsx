import cn from 'classnames';
import { ButtonBase, TButtonBaseProps } from '../../atoms/ButtonBase/ButtonBase';
import s from './Button.module.scss';

export enum EButtonVariant {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

export enum EButtonPriority {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum EButtonSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

type IButtonProps = TButtonBaseProps & {
  variant: EButtonVariant;
  priority: EButtonPriority;
  size: EButtonSize;
};

function Button({ variant, className, priority, size, children, ...props }: IButtonProps) {
  const appliedClassName = cn(s.Button, {
    className,
    [s.Button_variant_text]: variant === EButtonVariant.TEXT,
    [s.Button_variant_contained]: variant === EButtonVariant.CONTAINED,
    [s.Button_variant_outlined]: variant === EButtonVariant.OUTLINED,
    [s.Button_priority_primary]: priority === EButtonPriority.PRIMARY,
    [s.Button_priority_secondary]: priority === EButtonPriority.SECONDARY,
    [s.Button_size_md]: size === EButtonSize.MEDIUM,
    [s.Button_size_sm]: size === EButtonSize.SMALL,
    [s.Button_size_lg]: size === EButtonSize.LARGE,
  });

  return <ButtonBase {...{ ...props, className: appliedClassName }}>{children}</ButtonBase>;
}

Button.displayName = Button;

export { Button };
