import React, {Component} from 'react';
import './App.css'

export default class App extends Component {
    render() {
        const article = {
            title: 'About me',
            creator: {
                firstName: 'John',
                lastName: 'Smith'
            }
        }
        return (
            <div className="container">
                <div className="header">{article.title}</div>
                <hr className="line"/>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <hr className="line"/>
                <div className="sign">Created by {article.creator.firstName} {article.creator.lastName}.</div>
            </div>
        );
    }
}
