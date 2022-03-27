import Interview from "./interview";
export const Header = (props) => {
  	return (
		<div className="main-header" id="mainHeader">
			<div className='row headerSection'>
				<div  className="col-md-4 header-title">
					<h2 className="header-learn title">
						{props.data.readyToLearn}
					</h2>
					<h2 className="header-learn">
						{props.data.lets + " " }
						{props.data.talk ? 
						<>
						<span >{props.data.talk}</span> 
						<span className="span-alert" style={{fontWeight:800,color:'#F6871F'}}>!</span>
						</>
					 :null	
					}
						
					</h2>
					<a type="button" className="btn btn-custom btn-lg interview"
						href={`#interviewPopup`} data-toggle="modal" data-target={`#interviewPopup`} 
					>{props.data.interview}</a>
					<button  type="button" className="btn btn-custom btn-lg" onClick={(e)=>{
						e.preventDefault();
						window.location.href="#contact"
					}}>{props.data.sign_up}</button>
				</div>
				<img src="img/intro-bg.png" style={{width:'70%',float:'right'}} alt=""/>
				<div className="chape-of-water">
			</div>
			</div>
			<Interview interview={props.interview}></Interview>
		</div>
		)
}
