import { useState } from 'react'
// import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
const Interview = props => {
    
    const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name, email, message)
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
    return (
        <div className="modal  fade" id="interviewPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header teamDialog">
                        <h4 className="modal-title" id="myModalLabel" >{props.interview.title}</h4>
                        <p>{props.interview.description}</p>
                    </div>
                    <div className="modal-body" style={{ backgroundColor: "#612A60" }}>
                        <div>

                                            <form name='sentMessage' validate="true" onSubmit={handleSubmit} >
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input
                                                                type='text'
                                                                id='name'
                                                                name='name'
                                                                className='form-control'
                                                                placeholder={props.interview.name}
                                                                required
                                                                onChange={handleChange}
                                                            />
                                                            <p className='help-block text-danger'></p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input
                                                                type='text'
                                                                id='lastName'
                                                                name='lastName'
                                                                className='form-control'
                                                                placeholder={props.interview.lastName}
                                                                required
                                                                onChange={handleChange}
                                                            />
                                                            <p className='help-block text-danger'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input
                                                                type='email'
                                                                id='email'
                                                                name='email'
                                                                className='form-control'
                                                                placeholder={props.interview.labelEmail}
                                                                required
                                                                onChange={handleChange}
                                                            />
                                                            <p className='help-block text-danger'></p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input
                                                                type='tel'
                                                                id='TelephoneNumber'
                                                                name='telephoneNumber'
                                                                className='form-control'
                                                                placeholder={props.interview.labelPhone}
                                                                required
                                                                onChange={handleChange}
                                                            />
                                                            <p className='help-block text-danger'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className="form-control placeholder">
                                                                <option value="">{props.interview.language}</option>
                                                                <option value="es">{props.interview.es}</option>
                                                                <option value="en">{props.interview.en}</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className="form-control placeholder">
                                                                <option value="">{props.interview.whereYouFindUs}</option>
                                                                <option value="internet">{props.interview.internet}</option>
                                                                <option value="Social Networks">{props.interview.socialNetowork}</option>
                                                                <option value="Friend">{props.interview.friend}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='form-group'>
                                                    <textarea
                                                        name='message'
                                                        id='message'
                                                        className='form-control'
                                                        rows='4'
                                                        placeholder='Message'
                                                        required
                                                        onChange={handleChange}
                                                    ></textarea>
                                                    <p className='help-block text-danger'></p>
                                                </div>
                                                <div id='success'></div>
                                                <button type='submit' className='btn btn-custom btn-lg'>
                                                    {props.interview.sendMessage}
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>

                     
        </div>
    )
}
export default Interview;