import { useForm } from '@formspree/react';

const Interview = props => {
    const [state, handleSubmit] = useForm("xyyvgalq");
    const  handleSubmitted = (e) => {
        e.target.reset();
        setTimeout(()=>{
          window.location.reload();
        },2000)
     }
    return (
        <div className="modal  fade" id="interviewPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header teamDialog">
                        <h3 className="modal-title" id="myModalLabel" >{props.interview.title}</h3>
                        <p>{props.interview.description}</p>
                    </div>
                    <div className="modal-body" style={{ backgroundColor: "#612A60" }}>
                        <div>

                                            <form name='sentMessage' id="sentMessage" validate="true" onSubmit={(e)=>{
                                                handleSubmit(e);
                                                handleSubmitted(e);
                                            }} >
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
                                                                
                                                            />
                                                            <p className='help-block text-danger'></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className="form-control placeholder" name="language"> 
                                                                <option value="">{props.interview.language}</option>
                                                                <option value="es">{props.interview.es}</option>
                                                                <option value="en">{props.interview.en}</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className="form-control placeholder" name="whereYouFindUs">
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