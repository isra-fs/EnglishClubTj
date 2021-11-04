import JsonData from "../data/data.json";
export const Header = (props) => {
  	return (
		<div className="main-header" id="mainHeader">
			<div className='row headerSection'>
				<div  className="col-md-4 header-title">
					<h2 className="header-learn title">
						{JsonData.Header.readyToLearn}
					</h2>
					<h2 className="header-learn">
						{JsonData.Header.lets + " " }
						<span >{JsonData.Header.talk}</span> 
						<span className="span-alert" style={{fontWeight:800,color:'#F6871F'}}>!</span>
					</h2>
					<button type="button" className="btn btn-warning">{JsonData.Header.sign_up}</button>
				</div>
				<img src="../img/intro-bg.png" style={{width:'70%',float:'right'}} />
				<div className="chape-of-water">
			</div>
			</div>
		</div>
		)
}
