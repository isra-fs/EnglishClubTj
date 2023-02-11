
import { useForm, ValidationError } from '@formspree/react';

export const Contact = (props) => {
   const [state, handleSubmit] = useForm("xyyvgalq");

 const  handleSubmitted = (e) => {
    e.target.reset();
	setTimeout(()=>{
		window.location.reload();
	},2000)
 }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{props.data.title}</h2>
                <p>
                  {props.data.description}
                </p>
              </div>
              <form name='sentMessage' validate="true"  onSubmit={(e)=>{
				handleSubmit(e) 
				handleSubmitted(e)}} id="sendMessageForm">
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                      />
					  <ValidationError 
						prefix="Name" 
						field="name"
						errors={state.errors}
						/>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                      />
						<ValidationError 
						prefix="Email" 
						field="email"
						errors={state.errors}
						/>
                      <p className='help-block text-danger'></p>
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
				  <ValidationError 
						prefix="message" 
						field="message"
						errors={state.errors}
						/>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  {props.data.sendMessage}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>{props.data.contactInfo}</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> {props.data.labelAddress}
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> {props.data.labelPhone}
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> {props.data.labelEmail}
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
			<div className='contact-item'>
			<p>
                <span>
                  <i className='fa fa-share-alt'></i> {props.data.labelSocialNetwork}
                </span>
              </p>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'} target="_blank" rel="noreferrer">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'} target="_blank" rel="noreferrer">
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
          </div>
            </div>
          </div>
        </div>
		
      </div>
	   <iframe width="100%" height="500" title="clubMap"
				id="gmap_canvas" src="https://maps.google.com/maps?q=Blvd%20Insurgentes%20Tijuana%20Plaza%20Gran%20florido%20English&t=&z=13&ie=UTF8&iwloc=&output=embed" 
				frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
		</iframe>
    </div>
  )
}
