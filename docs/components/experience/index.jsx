import React, { Component } from 'react';
import History from '../history';

var events = [
    { text: "", empty: true },
    { text: "FULLSTACK-JS DEVELOPER | CUROGRAM", description: "The development of messenger on platform of NodeJS using the HapiJs framework and AngularJS." },
    { text: "2016" },
    { text: "FRONTEND DEVELOPER | .INOSTUDIO", description: "Application Development on .NET platform using a javascript framework AngularJS for search engine's." },
    { text: "2015" },
    { text: "JAVASCRIPT DEVELOPER | BANK SYSTEM SERVICES", description: "Worked on developing and improving features built primarily in JavaScript, AngularJS." },
    { text: "2014" },
    { text: "ASP.NET DEVELOPER | NEUTRINO SOFTWARE" },
    { text: "2012" },
    { text: "ASP.NET DEVELOPER INTERN | .INOSTUDIO", description: "In-depth study of patterns of information systems architecture: Repository, ServiseLayer, Unit of Work." },
    { text: "2011" },
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