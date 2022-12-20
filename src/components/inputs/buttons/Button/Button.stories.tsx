import { ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from 'components/inputs/buttons';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components / Inputs / Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
        }}
        className='light-theme'
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Variants = () => (
  <>
    <Button dataTest='containedTest' variant={ButtonVariant.CONTAINED}>
      Contained
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.OUTLINED}>
      Outlined
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.SHADOWED}>
      Shadowed
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.TEXT}>
      Text
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button dataTest='containedTest' variant={ButtonVariant.CONTAINED} size={ButtonSize.XSMALL}>
      XSmall
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.CONTAINED} size={ButtonSize.SMALL}>
      Small
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.CONTAINED} size={ButtonSize.MEDIUM}>
      Medium
    </Button>

    <Button dataTest='containedTest' variant={ButtonVariant.CONTAINED} size={ButtonSize.LARGE}>
      Large
    </Button>
  </>
);
