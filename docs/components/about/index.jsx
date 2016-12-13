import React, { Component } from 'react';

const About = () => (
    require('./about.postcss'),
    <div className="about-wrapper common-wr">
        <div className="about-title common-title">About me</div>
        <div className="about-text">
            <p className="redline">
                Greetings! My name Vadim. I'm a web developer, specializing in the development of client web applications with more than three years experience.
            </p>

            <p className="redline">
                I am currently a masters student, specialising in ergonomic design and UI/UX development. Previously, during my bachelor's degree, my specialization was in software engineering. I have a broad knowledge in the field of programming and development of information systems. I am confident that with my skills, i will be able to create a truly multi-functional and user-friendly information systems.
            </p>
        </div>
    </div>
);

export default About;
