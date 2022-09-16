import React, { FC } from 'react'
import Template from '../../components/Template';

export interface NewEntryProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

const NewEntry: FC<NewEntryProps> = ({ title = "NewEntry title", className = "", style = {} }) => {
    return (
        <div className={className} style={style}>
            <Template title={title} />
        </div>
    )
}

export default NewEntry