import {
  boolean,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgButtonComponent } from './button.component';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

const groupId = 'lg-button';

stories.add('Button', () => ({
  moduleMetadata: {
    declarations: [LgButtonComponent]
  },
  template: `
    <lg-button
        variant={{variant}}
        [fullWidth]="fullWidth ? true : null"
        [rounded]="rounded ? true : null"
        [disabled]="disabled ? true : null">
      {{content}}
    </lg-button>
  `,
  props: {
    content: text('text', 'Button', groupId),
    rounded: boolean('rounded', false, groupId),
    disabled: boolean('disabled', false, groupId),
    fullWidth: boolean('fullWidth', false, groupId),
    variant: select(
      'variant',
      ['cta', 'primary', 'secondary', 'tertiary'],
      'primary',
      groupId
    )
  }
}));