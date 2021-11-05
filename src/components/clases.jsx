
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
              ? props.data.clases.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-sm-3'>
                    {' '}
                    <i ><img src= {"../img/services/" + d.icon}style={{width:'100px'}} /></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }