
export const Clases = (props) => {
    return (
      <div id='clases' className='text-center'>
        <div className='container'>

          <div className='section-title'>
            <h2>{props.data.title}</h2>
            <p>
             {props.data.description}
            </p>
          </div>
		  <div className='row'>
            {props.data
              ? props.data.clases.slice(0,3).map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-6 col-md-4'>
                    {' '}
                    <i ><img src= {"img/clases/" + d.icon}style={{width:'100px'}} alt=""/></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
          <div className='row'>
            {props.data
              ? props.data.clases.slice(3).map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-6 col-md-4'>
                    {' '}
                    <i ><img src= {"img/clases/" + d.icon}style={{width:'100px'}} alt=""/></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
		<div className="spot-video">
			<video src={"img/clases/spotEC.mp4"} width="100%" controls></video>
		</div>
      </div>
    )
  }