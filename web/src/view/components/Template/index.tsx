import React, { FC } from 'react'

export interface TemplateProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Template: FC<TemplateProps> = ({ title = "Template title", className = "", style = {} }) => {
    return (
        <div className={className} style={style}>
            {title}
        </div>
    )
}

export default Template