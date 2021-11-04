
import JsonData from "../data/data.json";
export const MenuOptions = props =>{
    return (
        <ul className='nav navbar-nav navbar-right'>
            {JsonData.HeaderLinks.map((option, index)=>
                <li  key={index} >
                    <a href= {option.link} 
                        className='page-scroll'  
                        >
                        {option.title}
                    </a>
                </li>
            )
        }
       </ul>
       
    )
}