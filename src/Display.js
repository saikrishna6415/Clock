import React from 'react';
import DateTime from './lib/DateTime';


const Display = (props) => (
    <div className="container-fluid">
        <div className="display">
            <div className="display-time">{DateTime.toTimeString(props.date)}</div> 
            {props.isDateVisible && <div className="display-date">{DateTime.toDateString(props.date)}</div>}
        </div>
    </div>
);


export default Display;