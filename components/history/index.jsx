import React, { Component } from 'react';

function createHistoryEvent(event) {
    return (
        <div className="history-event">
            <i className={event.empty ? 'history-anchor empty' : 'history-anchor'}></i>
            <div className="history-text">
                { event.text }
            </div>
            <span className="history-description">
                { event.description }
            </span>
        </div>
    );
};

const History = (props) => (
    require('./history.postcss'),
    <div className="history-wrapper">
        { props.events.map(createHistoryEvent) }
    </div>
);

export default History;