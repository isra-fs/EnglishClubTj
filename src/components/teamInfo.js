const TeamInfo = props=>{
    return(
        <>{
            props.info.img ?
            <div className="modal  fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header teamDialog">
                        <h4 className="modal-title" id="myModalLabel" >{props.team.moreAbout}  {props.info.name}</h4>
                    </div>
                    <div className="modal-body">
                        <center>
                            <div  style={{backgroundImage:'url("'+props.info.img+'")',
                            width:'50%',
                            height:200,
                        }} className={"images-team"}></div>
                            <h3>{props.info.job}</h3>
                        </center>
                        <hr/>
                        <center>
                        <p className="text-left"><strong>Bio: </strong><br/>
                            {props.info.bio}</p>
                        <br/>
                        </center>
                    </div>
                </div>
            </div>
        </div> :null
        }
        </>
    )
}
export default TeamInfo;