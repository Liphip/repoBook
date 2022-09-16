import React, { FC } from 'react'
import Template from '../../components/Template';

export interface HomeProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Home: FC<HomeProps> = ({ title = "Home title", className = "", style = {} }) => {
    return (
        <div className={className} style={style}>
            <Template title={title} />
        </div>
    )
}

export default Home