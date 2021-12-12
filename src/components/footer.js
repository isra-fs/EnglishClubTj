export const Footer =props =>{
    return(
        <div id='footer'>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a style={{marginRight:'10px'}} href={props.data ? props.data.facebook : '/'} target="_blank" rel="noreferrer">
                            <i className='fa fa-facebook'></i>
                        </a>
                        <a href={props.data ? props.data.youtube : '/'} target="_blank" rel="noreferrer">
                            <i className='fa fa-youtube'></i>
                        </a>	
                    </section>
                </div>
                <div className="text-center p-3" >
                   {props.data.copyright}
                </div>
            </footer>
        </div>
    )
}