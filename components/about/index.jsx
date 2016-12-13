import React, { Component } from 'react';

const About = () => (
    require('./about.postcss'),
    <div className="about-wrapper common-wr">
        <div className="about-title common-title">About me</div>
        <div className="about-text">
            <p className="redline">
                Hello world! My name is <span className="joke">John Cena</span> Vadim. I'am web developer specializing in the development of client web applications with experience in more than three years.
            </p>

            <p className="redline">
                I'am master student and now my specialty is ergonomic design and UI/UX development. Previously, when i was a bachelor, my specialization was software engineering. I have brought knowledge in the field of programming and development of information systems. I am confident that together these skills allow to create a truly multi-functional and user-friendly information systems.
            </p>
        </div>
    </div>
);

export default About;
