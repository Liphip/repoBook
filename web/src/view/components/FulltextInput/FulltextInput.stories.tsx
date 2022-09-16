import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FulltextInput, { FulltextInputProps } from './index'

export default {
    title: 'Application/Components/FulltextInput',
    component: FulltextInput
} as ComponentMeta<typeof FulltextInput>;

const StroyFulltextInput: ComponentStory<typeof FulltextInput> = (args: FulltextInputProps) => <FulltextInput {...args} />

export const Basic = StroyFulltextInput.bind({});
Basic.args = {
    title: 'My title'
}

export const BlackBackground = StroyFulltextInput.bind({});
BlackBackground.args = {
    ...Basic.args,
    className: 'bg-black'
}