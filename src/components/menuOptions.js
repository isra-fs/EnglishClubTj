
import JsonData from "../data/data.json";
import { Link } from "react-scroll";
export const MenuOptions = props =>{
    return (
        <ul className='nav navbar-nav navbar-right'>
            {JsonData.HeaderLinks.map((option, index)=>
                <li  key={index}   >
                    <Link 
                    onClick={()=>{
                        props.setExpanded()
                    }}
                    activeClass="active"
                    to={option.link} 
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={700}>
                    {option.title}
                    </Link>
                </li>
            )
        }
       </ul>
       
    )
}