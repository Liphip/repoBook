import React, { FC } from 'react'

export interface FulltextInputProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

const FulltextInput: FC<FulltextInputProps> = ({ title = "FulltextInput title", className = "", style = {} }) => {
    return (
        <div className={className} style={style}>

        </div>
    )
}

export default FulltextInput