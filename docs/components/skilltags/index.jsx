import React, { Component } from 'react';

function createGroupItem(skill) {
    return (
        <div className="skilltags-group-wrapper">
            <div className="skilltags-group">
                { skill.group }:
            </div>
            <div className="skilltags-items-wrapper clearfix">
                { skill.items.map(createTagItem) }
            </div>
        </div>
    );

    function createTagItem(tag) {
        return (
            <div className="tag-item">
                #{ tag }
            </div>
        );
    };
};

const Skilltags = (props) => (
    require('./skilltags.postcss'),
    <div className="skilltags-wrapper">
        {props.skills.map(createGroupItem) }
    </div>
);

export default Skilltags;