import TeamInfo  from "./teamInfo";
export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{props.data.title}</h2>
          <p>
           {props.data.description}
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.team.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
					<a href={`#${d.name}-${i}`} data-toggle="modal" data-target={`#${d.name}-${i}`}  >
                        <div  style={{backgroundImage:'url("'+d.img+'")'}} className={"images-team"}></div>
					</a>
					<TeamInfo info={d} id={`${d.name}-${i}`} team={props.data}/>
                    <div className='caption'>
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
