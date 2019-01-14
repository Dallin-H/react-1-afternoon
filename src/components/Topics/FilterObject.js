import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            families : [
                {name: 'Dallin', age: 26}, 
                {name: 'Robert', age: 54, hairColor: 'brown'},
                {name: 'Ricardo', age: 28},
                {name: 'Julie', age: 36, title: 'theBoss'}],
            userInput: '',
            filteredFamilies : []
        }
    }

//methods:
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterFamilies(prop)  {
        var families = this.state.families;
        var filteredFamilies = [];

        for (let index = 0; index < families.length; index++) {
            if ( families[index].hasOwnProperty(prop) ) {
                filteredFamilies.push(families[index])
            }
        }
        this.setState({ filteredFamilies: filteredFamilies });
    }


    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className='puzzleText'> Original: { JSON.stringify(this.state.families, null, 10) } </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.filterFamilies(this.state.userInput) }> Filter </button>
                <span className='resulsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredFamilies, null, 10) } </span>
            </div>
        )
    }
}