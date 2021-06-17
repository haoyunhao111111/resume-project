import React from 'react'
import './index.less'
interface IProp{
    title: string;
    styles?: React.CSSProperties
}

function Title({title, styles}:IProp) {
    return (<div style={styles} styleName='title'>{title}</div>)
}

export default Title