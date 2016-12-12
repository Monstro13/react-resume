import React, { Component } from 'react';

function createLinkItem(link) {
    return (
        <div className="link-item link">
            <a className={`link-picture-target picture ${link.caption}`} href={link.url} onClick={link.onclick}>
                <i className={`fa fa-${link.caption}`} aria-hidden="true"></i>
            </a>
        </div>
    );
};

const Links = (props) => (
    require('./links.postcss'),
    <div className={`links-wrapper ${props.place} clearfix`}>
        {props.links.map(createLinkItem) }
    </div>
);

export default Links;
