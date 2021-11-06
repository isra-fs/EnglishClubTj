export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
	  <h2>{props.data.title}</h2>
	  <p>{props.data ? props.data.aboutUs : "loading..."}</p>
        <div className="row" >
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
			  <h3 >{props.data.labelMision} </h3>
			  <p>{props.data ? props.data.mission : "loading..."}</p>
			  <h3>{props.data.labelTeachingMethod}</h3>
				<div className="list-style">
					<ul>
						{props.data
						? props.data.teachingMethod.map((d, i) => (
							<li key={`${d}-${i}`}>{d}</li>
							))
						: "loading"}
					</ul>
				</div>
            </div>
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
							<li key={`${d}-${i}`}>{d}</li>
							))
						: "loading"}
					</ul>
				</div>
				</div>
			</div>
			<div className="col-xs-12 col-md-6">
				<div className="about-text">
				<h3 style={{marginTop:"20px"}}>{props.data.labelOurCompanyIdeology}</h3>
				<div className="list-style">
					<ul>
						{props.data
						? props.data.ourCompanyIdeology.map((d, i) => (
							<li key={`${d}-${i}`}>{d}</li>
							))
						: "loading"}
					</ul>
				</div>
				</div>
			</div>
		</div>
      </div>
    </div>
  );
};
