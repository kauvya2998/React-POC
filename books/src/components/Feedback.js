import React , {useContext} from 'react'
import {CopyRightsContext} from '../App'
import {useFormik} from 'formik'
import * as yup from 'yup'
import './feedStyle.css'



function Feedback() {
    const copy=useContext(CopyRightsContext)

    const validationSchema = yup.object({
        name: yup.string().required('!Required!'),
        email: yup.string().email('!invalid email!').required('!Required!'),
        comments: yup.string().required('!Required!')
    })

    const formstate = useFormik({
        initialValues:{
            name:'',
            email:'',
            comments:''
        },
        onSubmit: values => {
            alert(`Your comment '${values.comments}' have been received by us !!!`)
        },
        validationSchema
    })

    console.log(formstate.errors)

    return (
        <div className='body'>

            <form onSubmit={formstate.handleSubmit} >

            <div className='container'>
            <label  htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={formstate.values.name} onChange={formstate.handleChange} />
            {formstate.errors.name? <span>{formstate.errors.name}</span> : null}
            </div>

            <div className='container'>
            <label  htmlFor='email'>Email</label>
            <input type='text' id='email' name='email' value={formstate.values.email} onChange={formstate.handleChange} />
            {formstate.errors.email ? <span>{formstate.errors.email}</span> : null}
            </div>

            <div className='container'>
            <label  htmlFor='comments'>Comments</label>
            <input type='text' id='comments' name='comments' value={formstate.values.comments} onChange={formstate.handleChange} />
            {formstate.errors.comments? <span>{formstate.errors.comments}</span> : null}
            </div>

            <div className='container'>
            <button type='submit'>Comment</button>
            </div>

            </form>

            <p className="context">CopyRights Info : {copy}</p>

        </div>
    )
}

export default Feedback
