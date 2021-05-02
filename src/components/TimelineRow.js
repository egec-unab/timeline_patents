import React from 'react'
import TimelineItem from './TimelineItem'

const TimelineRow = (props) => {
    // console.log(props.items);

    function isEven(value) {
        if (value%2 === 0)
            return true;
        else
            return false;
    }

    const number_of_rows = Math.round(props.items.length/2, 0);

    console.log("number of rows: ", number_of_rows);

    return (
        <div className="row">
            {
                props.items.map(
                    (item, index) => (
                        <TimelineItem key={item.Key} item={item} isEven={isEven(index)}/>
                    )
                )
            }
        </div>
    )
}

export default TimelineRow
