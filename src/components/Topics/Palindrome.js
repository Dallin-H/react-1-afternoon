import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();
            this.state = {
                userInput: [],
                palindrom: ''
            } 
    }

//methods go here:

    handleChange(val) {
        this.setState({ userInput: val })
    }

    isPalindrom(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( forwards === backwards ) {
            this.setState({ palindrome: 'true' });
        } else {
            this.setState({ palindrome: 'false' });
        }
    }

    render() {
        return(
            <div className='puzzleBox palindromePB'>
                <h4> Palindrome </h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.isPalindrom(this.state.userInput) }> Check </button>
                <span classname='resultsBox'> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}