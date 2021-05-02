import React from 'react'
import './Timeline.css'
import TimelineRow from './TimelineRow'
const Timeline = (props) => {
    // console.log(props.data);
    return (
        <div className="container bootstrap snippets bootdey">
            <section id="news" className="white-bg padding-top-bottom">
                <div className="container bootstrap snippets bootdey">
                    <div className="timeline">
                        {
                            props.data.map(
                                (item, index) => (
                                    <div key={"div"+index}>
                                        <div className="date-title">
                                            <span>{item.Year}</span>
                                        </div>
                                        {
                                            item.Patents.reduce(function (rows, key, index) { 
                                                return (index % 2 === 0 ? rows.push([key]) 
                                                : rows[rows.length-1].push(key)) && rows;
                                            }, []).map(
                                                (p) => (
                                                    <TimelineRow key={Math.random()} items={p}/>
                                                )
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline