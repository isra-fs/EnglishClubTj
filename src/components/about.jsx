export const About = (props) => {
  return (
    <div id="about" style={{backgroundImage: 'url(img/about/photo-motivation.jpg)'}}>
      <div className="container">
	  <h2>{props.data.labelMision}</h2>
	  <p>{props.data ? props.data.aboutUs : "loading..."}</p>
	  <h2>{props.data.labelTeachingMethod}</h2>
	  <p>{props.data ? props.data.teachingMethod[0] : "loading..."}</p>
        <div className="row" >
          <div className="col-xs-12 col-md-6 about-icons">
			  	<img src="img/about/listening.svg" alt=""/>
				<img src="img/about/speaking.svg" alt=""/>
				<img src="img/about/reading.svg" alt=""/>
				<img src="img/about/writing.svg"alt=""/>					
          </div>
          <div className="col-xs-12 col-md-6">
			<ul>
				{props.data
				? props.data.teachingMethod.slice(1).map((d, i) => (
					<div key={`${i}`}><li>{d}</li><br></br></div>
					))
				: "loading"}
			</ul>
          </div>
        </div>
		<div className="row" style={{marginTop:"30px"}}>
			<div className="col-xs-12 col-md-6">
				<div className="about-text">
				<h3>{props.data.labelMotivation}</h3>
				<div className="list-style">
					<ul>
						{props.data
						? props.data.motivation.map((d, i) => (
							<div key={`${i}`}><li>{d}</li><br></br></div>
							))
						: "loading"}
					</ul>
				</div>
				</div>
			</div>
			<div className="col-xs-12 col-md-6">
			</div>
		</div>		
      </div>
    </div>
  );
};
