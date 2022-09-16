import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewEntry, { NewEntryProps } from './index'

export default {
    title: 'Application/Screens/NewEntry',
    component: NewEntry
} as ComponentMeta<typeof NewEntry>;

const StroyNewEntry: ComponentStory<typeof NewEntry> = (args: NewEntryProps) => <NewEntry {...args} />

export const Basic = StroyNewEntry.bind({});
Basic.args = {
    title: 'My title'
}

export const BlackBackground = StroyNewEntry.bind({});
BlackBackground.args = {
    ...Basic.args,
    className: 'bg-black'
}