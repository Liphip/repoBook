import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Template, { TemplateProps } from './index'

export default {
    title: 'Application/Components/Template',
    component: Template
} as ComponentMeta<typeof Template>;

const StroyTemplate: ComponentStory<typeof Template> = (args: TemplateProps) => <Template {...args} />

export const Basic = StroyTemplate.bind({});
Basic.args = {
    title: 'My title'
}

export const BlackBackground = StroyTemplate.bind({});
BlackBackground.args = {
    ...Basic.args,
    className: 'bg-black'
}