import React, { Component } from 'react';
import History from '../history';

var events = [
    { text: "", empty: true },
    { text: "ASP.NET DEVELOPER. INOSTUDIO.", description: "Application Development on .NET platform using a javascript framework AngularJS." },
    { text: "2015" },
    { text: "ASP.NET DEVELOPER. NEUTRINO SOFTWARE." },
    { text: "2014" },
    { text: "ASP.NET DEVELOPER INTERN. INOSTUDIO.", description: "In-depth study of patterns of information systems architecture: Repository, ServiseLayer, Unit of Work." },
    { text: "2013" },
    { text: "", empty: true },
    { text: "", empty: true },
    { text: "", empty: true }
];

const Experience = () => (
    require('./experience.postcss'),
    <div className="experience-wrapper common-wr">
        <div className="experience-title common-title">Experience</div>
        <div className="experience-history">
            <History events={events} />
        </div>
    </div>
);

export default Experience;