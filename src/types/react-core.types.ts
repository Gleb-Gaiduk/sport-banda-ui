import React from 'react';

type AsProp<Element extends React.ElementType> = {
  as?: Element;
};

type PropsKeysToOmit<Element extends React.ElementType, Props> = keyof (AsProp<Element> & Props);

type CommonComponentProps = {
  className?: string;
  dataTest: string;
};

export type MultiElementComponentProps<
  Element extends React.ElementType,
  Props extends object = {},
> = React.PropsWithChildren<Props & AsProp<Element> & CommonComponentProps> &
  Omit<React.ComponentPropsWithoutRef<Element>, PropsKeysToOmit<Element, Props & CommonComponentProps>>;

export type RefTypeForElement<Element extends React.ElementType> = React.ComponentPropsWithRef<Element>['ref'];

export type MultiElementComponentPropsWithRef<
  Element extends React.ElementType,
  Props extends object = {},
> = MultiElementComponentProps<Element, Props> & { ref?: RefTypeForElement<Element> };
