import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home, { HomeProps } from './index'

export default {
    title: 'Application/Screens/Home',
    component: Home
} as ComponentMeta<typeof Home>;

const StroyHome: ComponentStory<typeof Home> = (args: HomeProps) => <Home {...args} />

export const Basic = StroyHome.bind({});
Basic.args = {
    title: 'My title'
}

export const BlackBackground = StroyHome.bind({});
BlackBackground.args = {
    ...Basic.args,
    className: 'bg-black'
}