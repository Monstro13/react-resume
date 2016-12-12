import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Console extends Component {
    constructor() {
        super();

        this.state = {
            historyCmds: [
                { text: "For use, type in console 'help' ..." }
            ],
            cmds: {
                'get': this.getCmd.bind(this),
                'help': this.helpCmd.bind(this),
                'clear': this.clearCmd.bind(this),
                'default': this.defaultCmd.bind(this)
            }
        };

        this.setInputCmdFocus = this.setInputCmdFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    setInputCmdFocus(e) {
        return this._input.focus();
    }

    onKeyDown(e) {
        let value = this._input.value;

        //call command by click on enter
        if (e.keyCode && e.keyCode == 13) {
            this.parseCmd.call(this, value);

            return this._input.value = "";
        };

        //if backspace clicked on empty input dont get previous page
        if (e.keyCode && e.keyCode == 8 && !value.length) {
            return e.preventDefault();
        };

        //controling length of input
        if (value.length >= 31) {
            this._input.value = value.substring(0, value.length - 1);

            return e.preventDefault();
        };

        return false;
    }

    parseCmd(cmd) {
        let command = cmd.split(' ')[0];
        let existCommand = this.state.cmds[command.toLowerCase()];

        return existCommand ? existCommand(cmd) : this.state.cmds.default(cmd);
    }

    clearCmd(activeCmd) {
        return this.setState({
            historyCmds: [].concat({ text: `For use, type in console 'help' ...` }),
        });
    }

    defaultCmd(activeCmd) {
        return this.setState({
            historyCmds: [].concat(this.state.historyCmds,
                { text: activeCmd, class: 'active-cmd' },
                { text: `Command '${activeCmd.trim()}' not found. For use, type in console 'help' ...` }),
        });
    }

    helpCmd(activeCmd) {
        return this.setState({
            historyCmds: [].concat(this.state.historyCmds,
                { text: activeCmd, class: 'active-cmd' },
                { text: `Page 'About' - get about`, class: 'multiline' },
                { text: `Page 'Education' - get education`, class: 'multiline' },
                { text: `Page 'Experience' - get experience`, class: 'multiline' },
                { text: `Page 'Skills' - get skills`, class: 'multiline' },
                { text: `Clear console outputs - clear`, class: 'multiline' },
                { text: `Get help - help`, class: 'multiline' }),
        });
    }

    getCmd(activeCmd) {
        let page = activeCmd.split(' ')[1];
        if (!page) return this.state.cmds.default(activeCmd);

        this.setState({
            historyCmds: [].concat(this.state.historyCmds,
                { text: activeCmd, class: 'active-cmd' }),
        });
        
        return hashHistory.push(`/${page}`);
    }

    render() {
        return (
            require('./console.postcss'),
            <div className="console-wrapper" onClick={this.setInputCmdFocus}>
                <div className="console-border outer-border">
                    <span className="console-cam round __white"></span>
                    <div className="console-border inner-border">
                        <div className="console-content">
                            <div className="top-border">
                                {
                                    ["red", "yellow", "green"].map(function (color) {
                                        return (<span className={`round __${color} ctrl-item`}></span>);
                                    })
                                }
                            </div>
                            <div className="main-content">
                                <div className="history-cmds">
                                    {
                                        this.state.historyCmds.map(function (cmd) {
                                            return (
                                                <span className={!!cmd.class ? `history-cmd ${cmd.class}` : `history-cmd`}>
                                                    { cmd.text }
                                                </span>
                                            );
                                        })
                                    }
                                </div>
                                <div className="input-container clearfix">
                                    <span className="input-container-arrow">
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </span>
                                    <input ref={(c) => this._input = c}
                                        type="text" className="input-container-cmd"
                                        autoFocus={true}
                                        onKeyDown={this.onKeyDown} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Console;
