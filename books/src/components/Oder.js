import React , {useState, useEffect, useContext} from 'react'
import {CopyRightsContext} from '../App'
import {BeatLoader} from 'react-spinners'
import axios from 'axios'
import './orderStyle.css'
import Modal from '../components/Modal'


function Oder(props) {
    
    const [posts, setPosts]=useState([])
    const [dontShow, setDontShow]=useState(true)
    const [modal, setModal]=useState(false)
    const [loader, setLoader]=useState(true)
    const [formdata, setFormData]=useState({})
    const copy=useContext(CopyRightsContext)

    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setLoader(false)
            setPosts(response.data)
        })
        .catch((error)=>{console.log(error)})
    },[])

    const changeComponent=(e)=>{
        console.log("CLicked book !!!")
        if(modal === false){
        setModal(true)
        setDontShow(false)
        setFormData(e)}
        else{
            setModal(false)
            setDontShow(true)
        }
        console.log(e)
    }
    

    return (
        <div>
            <BeatLoader loading={loader} />
            {dontShow && 
            <ul>
                {
                    posts.map(post => <li  key={post.id} onClick={()=>changeComponent(post)}> {post.title} </li>)
                }
                <p>CopyRights Info : {copy}</p>
                <p>Total visits {props.i}</p>
            </ul>
            
            
            }
            
            {modal && <Modal post={formdata} changeComponent={changeComponent}/>}
        </div>
    )
            
}

export default Oder
