import React, {useState, useRef} from 'react'
import './styles.css'
import Home from '../components/Home'
import Order from '../components/Oder'
import Sell from '../components/Sell'
import Owner from '../components/Owner'
import withCounter from '../components/withCounter'
import Feedback from './Feedback'




function Welcome(props) {
    const [home, setHome]=useState(true)
    const [order, setOrder]=useState(false)
    const [sell, setSell]=useState(false)
    const [owner, setOwner]=useState(true)
    const [modal, showModal]=useState(false)
    const [fb,showFb]=useState(false)
    const refvar=useRef(null)
   

    const showHome = () =>{
        console.log("before home", home)
        setHome(true)
        setSell(false)
        setOrder(false)
        setOwner(true)
        showFb(false)
        console.log("after home", home)
    }

    const fb1 = () =>{
        console.log("before home", home)
        setHome(false)
        setSell(false)
        setOrder(false)
        setOwner(true)
        showFb(true)
        console.log("after home", home)
    }

    const showOrder = () =>{

        props.inc()
        setOrder(true)
        setHome(false)
        setSell(false)
        setOwner(false)
        showFb(false)
        console.log("after order", order)
        
    }
    const showOwner = () => {
        setOwner(false)
        showModal(true)
        setHome(false)
        showFb(false)
    }
    const handleCloseModal = () => {
        setOwner(true)
        showModal(false)
        setHome(true)
    }
    const showSell = () =>{
        setSell(true)
        setOwner(false)
        setOrder(false)
        setHome(false)
        showFb(false)
        console.log("after sell", sell)
    }
    if (props.name === ''){
        throw new Error('not a name')
    }
    return (
        < >
            <h1><u>Welcome to {props.name}</u></h1>
            <nav className="Navbar">
                | <a href="#" onClick={showHome}>Home</a> |
                <a href="#" onClick={showOrder}>Order Books</a> |
                <a href="#" onClick={showSell}>Sell a Book</a> |
                <a href="#" onClick={fb1}>Feedback</a> |
            </nav>
                   
           
    { home &&  <Home /> }
    { order &&  <Order i={props.c} />  }
    {fb && <Feedback/>}
    { sell &&  <Sell i={props.c} ref={refvar}/> }    
    {owner && <button onClick={showOwner}>Owner Info</button>} 
    {modal && <Owner onClose={handleCloseModal}>
              <h2>Owner Info</h2>
              <p>This Site is maintained by Kauvya Krishna Kumar</p>
            </Owner>}
        </>
    )
}

export default withCounter(Welcome)




