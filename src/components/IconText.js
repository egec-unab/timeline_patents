import React from 'react'

const IconText = (props) => {

    if (props.hidden){
        return <span></span>
    }

    return (
        <span className="news-media-item-text">
            <h4>{props.title}</h4>
            <ul>
                {
                    props.items.map(
                        (item, index) => (
                            <li key={"li" + index}>{(item === "") ? "Not reported" : item}</li>
                        )
                    )
                }
            </ul>
        </span>
    )
}

export default IconText