import React, {useState, useEffect, useContext} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {CopyRightsContext} from '../App'
import axios from 'axios'
import './modalStyle.css'

toast.configure()

const Sell = React.forwardRef((props, ipref) => {

    const [id, setId]=useState('')
    const [body, setBody]=useState('')
    const [title, setTitle]=useState('')

    const copy=useContext(CopyRightsContext)

    useEffect(() => {
        ipref.current.focus()
    },[])

    const changeHandler1 = (e) => {
        setId(e.target.value)
    }
    const changeHandler2 = (e) => {
        setBody(e.target.value)
    }
    const changeHandler3 = (e) => {
        setTitle(e.target.value)
    }

    const post = (e) => {
        e.preventDefault()
        axios.post('http://jsonplaceholder.typicode.com/posts', {id,body,title})
        .then(response=>{
            console.log(response)
        toast('Post operation done successfully')
    })
        .catch(error=>{console.log(error)})
        setId('')
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h4>
                We are glad to advertise your BOOK here!
            </h4>
            <h6>
                Kindly fill in the details for the same :)
            </h6>
            <form>
            <br/>
                <div className="formdiv">
                <div className="label"><label>Userid</label></div>
                <input type='text' ref={ipref} value={id} onChange={changeHandler1} />
                </div>
                <div className="formdiv">
                <div className="label"><label>Body</label></div>
                <input type='text' value={body} onChange={changeHandler2}/>
                </div>
                <div className="formdiv">
                <div className="label"><label>Title</label></div>
                <input type='text' value={title} onChange={changeHandler3} />
                </div>
                <button type='submit' onClick={post}>Sell</button>
            </form>
            <p>CopyRights Info : {copy}</p>
            <p>Total visits {props.i}</p>
        </div>
    )

})

export default Sell
