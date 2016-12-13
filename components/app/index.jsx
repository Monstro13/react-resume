import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Author from '../author';
import Links from '../links';
import Console from '../console';

let links = [
    { caption: 'google-plus-square', url: 'https://plus.google.com/u/0/102161696345161350890' },
    { caption: 'facebook-square', url: 'https://www.facebook.com/wadim.tsar' },
    { caption: 'linkedin-square', url: 'https://ru.linkedin.com/in/vadim-tcaregorodtcev-46639aa3' },
    { caption: 'github-square', url: 'https://github.com/Monstro13' },
    { caption: 'twitter-square', url: 'https://twitter.com/TsarWadim' }
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            refers: {
                social: links,
                nav: [
                    { caption: 'arrow-circle-right', url: 'javascript:void(0)', onclick: this.nextPage.bind(this) },
                    { caption: 'times-circle-o', url: 'javascript:void(0)', onclick: this.nextPage.bind(this, null, 'about') }
                ]
            },
            windowWidth: window.innerWidth,
            pages: ['education', 'experience', 'skills', 'about'],
            currPage: 0,
            winWidth: 25 / window.innerWidth,
            winHeight: 25 / window.innerHeight,
            bgStyles: {}
        };

        this.strafeBg = this.strafeBg.bind(this);
    }

    strafeBg(e) {
        var pageX = e.pageX - (window.innerWidth / 2);
        var pageY = e.pageY - (window.innerHeight / 2);
        var newvalueX = this.state.winWidth * pageX * -1 - 25;
        var newvalueY = this.state.winHeight * pageY * -1 - 50;

        this.setState({
            bgStyles: { 'background-position': newvalueX + "px " + newvalueY + "px" }
        });
    }

    nextPage(e, forcePage) {
        let currIdx = this.state.currPage;

        let page = forcePage || this.state.pages[currIdx];
        this.setState({ currPage: currIdx == 3 ? 0 : currIdx + 1 });

        return hashHistory.push(`/${page}`);
    }

    render() {
        return (
            require('./app.postcss'),
            <div style={this.state.bgStyles} className="app-wrapper clearfix" onMouseMove={this.strafeBg}>
                <div className="app-left">
                    <div className="app-left-bg"></div>
                    <div className="app-author">
                        <Author />
                    </div>
                    <div className="app-console">
                        <Console />
                    </div>
                </div>
                <div className="app-right">
                    <div className="app-right-bg"></div>
                    <div className="app-state">
                        <div className="nav">
                            <Links links={this.state.refers.nav} place="top" />
                        </div>
                        {this.props.children}
                        <div className="links">
                            <Links links={this.state.refers.social} place={this.state.windowWidth > 450 ? 'bottom' : 'top left'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
