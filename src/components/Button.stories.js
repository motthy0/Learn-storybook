// import React from 'react';
// import Button from './Button';

// export default {
//   title: 'Example/js',
//   component: Button,
//   argTypes: {
//     text: { control: 'text' },
//     bgColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   text: 'Primary Button',
//   bgColor: '#007BFF',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   text: 'Secondary Button',
//   bgColor: '#6C757D',
// };

// export const Success = Template.bind({});
// Success.args = {
//   text: 'Success Button',
//   bgColor: '#28A745',
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   text: 'Danger Button',
//   bgColor: '#DC3545',
// };

import React from 'react';
import TextInput from './Button';

export default {
  title: 'Example/js',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <TextInput {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  bgColor: '#007BFF',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  bgColor: '#6C757D',
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success Button',
  bgColor: '#28A745',
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger Button',
};