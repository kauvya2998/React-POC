import React, { Component } from 'react'

const withCounter=(Original)=>{   
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 c:0
            }
        }
        increement=()=>{
            this.setState(prevState=>{
                return{c: prevState.c + 1}
            })
        }
        
        render() {
            return <Original c={this.state.c} inc={this.increement} {...this.props} />
            
        }
    }
    
    return NewComponent
    
}

export default withCounter
