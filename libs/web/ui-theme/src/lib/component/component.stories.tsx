import { Story } from '@storybook/react';
import { Component } from './component';

const Template: Story = () => <Component />;

export const Default = Template.bind({});
Default.args = {};

export default {
  component: Component,
  title: 'Component',
};
