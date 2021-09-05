import React from 'react'
import { ComponentStory, ComponentMeta} from '@storybook/react'

import App from './App'

export default {
  title: 'Overview',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Primary = Template.bind({});
