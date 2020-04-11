import React from 'react';
import calender from './lib/calendar.png'
const Panel = (props) => {
    return (
        <div className="container">
            <div className="panel">
                <label id="date-switch" className="switch">
                    <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate} />
                    <span className="slider round"></span>
                </label>
              <img className='calender' src={calender}alt="calender"/>
            </div>
        </div>
    );
};


export default Panel;