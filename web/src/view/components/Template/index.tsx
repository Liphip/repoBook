import React, { FC } from 'react'

export interface TemplateProps {
    title?: string;
}

const Template: FC<TemplateProps> = ({ title = "Template title" }) => {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            {title}
        </div>
    )
}

export default Template