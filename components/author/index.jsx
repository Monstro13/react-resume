import React, { Component } from 'react';

const Author = (props) => (
    require('./author.postcss'),
    <div className="author-wrapper clearfix">
        <div className="author-picture">
            <img className="author-picture-target picture"
                src="./components/author/img/profile.jpg" alt="prfile" />
        </div>
        <div className="author-info">
            <div className="author-info-name">
                Vadim Tcaregorodtcev
            </div>
            <div className="author-info-position">
                Senior Frontend Developer
            </div>
        </div>
    </div>
);

export default Author;