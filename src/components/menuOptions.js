
import JsonData from "../data/data.json";
export const MenuOptions = props =>{
    return (
        <ul className='nav navbar-nav navbar-right'>
            {JsonData.HeaderLinks.map((option, index)=>
                <li  key={index} >
                    <a href= {option.link} 
                        className='page-scroll'  
                        data-toggle={"collapse"}
                        data-target={"#bs-example-navbar-collapse-1"}>
                        {option.title}
                    </a>
                </li>
            )
        }
       </ul>
       
    )
}