import React, { Component } from 'react';
import Skilltags from '../skilltags';

let skills = [
    {
        group: "Super skills",
        items: ["Javascript", "AngularJs"]
    },
    {
        group: "High skills",
        items: ["ReactJs", "Flux/Redux", "HTML", "Jade", "CSS", "PostCSS", "ES6", "Node.js", "Express.js", "Webpack",
            "Gulp", "MongoDB", "Mongoose", "GIT", "German", "English"]
    },
    {
        group: "Have experience in",
        items: ["C#", "ASP.NET MVC", "TDD/BDD", "KarmaJs/Jasmine", "Heroku", "Angular2",
            "Ember", "JQuery", "Bootstrap", "Photoshop", "Stylus", "Less", "PhantomJS"]
    },
];

const Skills = () => (
    require('./skills.postcss'),
    <div className="skills-wrapper common-wr">
        <div className="skills-title common-title">Skills</div>
        <div className="skills-tags">
            <Skilltags skills={skills} />
        </div>
    </div>
);

export default Skills;