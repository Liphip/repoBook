import React from 'react';
import { ComponentStory } from '@storybook/react';
import App from './App';

export default {
    title: 'Application/App',
    component: App,
    controls: {
        hideNoControlsWarning: true
    }
}

const Template = () => <App />

export const Default: ComponentStory<typeof App> = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}