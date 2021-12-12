import { useEffect } from "react"

export const Testimonials = (props) => {

  useEffect(() => {
    // $('#quote-carousel').carousel({
    //   pause: true,
    //   interval: 4000,
    // });
	}, []);
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What our Students say</h2>
        </div>
 
		
  
      <div className="carousel slide" data-ride="carousel" id="quote-carousel">
        <ol className="carousel-indicators">
          <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#quote-carousel" data-slide-to="1"></li>
          <li data-target="#quote-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
			<div className="item active">
				<blockquote>
				<div className="row">
				<div className="col-sm-3 text-center"></div>
				<iframe  title="first" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fs.vaneleon%2Fposts%2F1750744661793994&show_text=true&width=500" 
				width="100%" height="226" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" 
				allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
				</div>
				<div className="col-sm-3 text-center"></div>
				</blockquote>
			</div>
	
			<div className="item">
				<blockquote>
				<div className="row">
				<div className="col-sm-3 text-center"></div>
				<iframe  title="second" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjorge.alvarezllanes%2Fposts%2F6482852325059930&show_text=true&width=500"
				width="100%" height="226" style={{border:"none",overflow:"hidden"}} scrolling="no" 
				frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
				</div>
				<div className="col-sm-3 text-center"></div>
				</blockquote>
			</div>
		
			<div className="item">
				<blockquote>
				<div className="row">
				<div className="col-sm-3 text-center"></div>
				<iframe title="third" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarzela027%2Fposts%2F10225979375414138&show_text=true&width=500"
				width="100%" height="226" style={{border:"none",overflow:"hidden"}} scrolling="no" 
				frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
				
				</div>
				<div className="col-sm-3 text-center"></div>
				</blockquote>
			</div>
        </div>
        <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
        <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
      </div>                          
    
  </div>
  	</div>
 
 
 
  )
}
