import React, { PureComponent } from 'react'
import {CopyRightsContext} from '../App'
import Order from '../components/Oder'
import './modalStyle.css'


class Modal extends PureComponent {

    constructor(props) {
        super(props)
        this.ipref=React.createRef()
        this.state = {
             showOrder:false,
             showModal:true
        }
    }
    componentDidMount(){
        this.ipref.current.focus()
        console.log(this.ipref)
    }
  
    render() {
        return (
            <>
            {this.state.showModal &&
            <form>
                <br/>
                <div className="formdiv">
                <div className="label"><label>Username</label></div>
                <input type='text' ref={this.ipref} />
                </div>
                <div className="formdiv">
                <div className="label"><label>Email</label></div>
                <input type='text' />
                </div>
                <div className="formdiv">
                <div className="label"><label>Password</label></div>
                <input type='text' />
                </div>
                <div className="formdiv">
                <div className="label"><label>Id</label></div>
                    <input type='text' value={this.props.post.id} />
                </div>
                <div className="formdiv">
                <div className="label"><label>Title</label></div>
                    <input type='text' value={this.props.post.title} />
                </div>
                <div className="formdiv">
                <div className="label"><label>Body</label></div>
                    <input type='text' value={this.props.post.body} />
                </div>
                <div>
                    <button type='submit' onClick={this.props.changeComponent}>Order !! </button>
                </div>
</form> }
<CopyRightsContext.Consumer>
    {
        info=>{
            return <p>CopyRights Info : {info}</p>
        }
    }
</CopyRightsContext.Consumer>
            {this.state.showOrder && <Order />}
            </>
        )
    }
}

export default Modal
