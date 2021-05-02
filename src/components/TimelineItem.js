import React from 'react'
import "./Timeline.css"
import "./TimelineItem.css"
import IconsPanel from './IconsPanel'

const TimelineItem = (props) => {
    // console.log("TimelineItem: ", props.item.TechnicalContent)
    const alignmentClass = (props.isEven) ? "" : "right";
    return (
        <div className={`col-sm-6 news-item ${alignmentClass}`}>
            <div className="news-content">
                <h1 className="news-title">{props.item.Patent}</h1>
                <h5 className="news-subtitle">{props.item.Applicants.join(", ")}</h5>
                <IconsPanel 
                    Inventors={props.item.Inventors} 
                    Materials={props.item.Materials}
                    Agents={[props.item.Agents]}
                />
                <p>{props.item.TechnicalContent}</p>
                <p> <span className="uses">Uses:</span> {props.item.Use}</p>
            </div>
        </div>
    )
}

export default TimelineItem
