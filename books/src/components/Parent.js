import React, { Component } from 'react'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             haserror:false
        }
    }
    
    static getDerivedStateFromError(error)
    {
        return{
            haserror:true
        }
    }
    render() {
        if(this.state.haserror){
        return <h1>ERROR!!!!!!</h1>
        }
        return this.props.children
    }
}

export default Parent
