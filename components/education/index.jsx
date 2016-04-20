import React, { Component } from 'react';
import History from '../history';

var events = [
    { text: "", empty: true },
    { text: "ICTIS ETA SFU. Master of Applied Informatics, Applied informatics." },
    { text: "2015" },
    { text: "ICTIS ETA SFU. Bachelor-Engineer of Computer Science, Software Engineering." },
    { text: "2011" },
    { text: "", empty: true },
    { text: "", empty: true },
    { text: "", empty: true }
];

const Education = () => (
    require('./education.postcss'),
    <div className="education-wrapper common-wr">
        <div className="education-title common-title">Education</div>
        <div className="education-history">
            <History events={events} />
        </div>
    </div>
);

export default Education;