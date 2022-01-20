import { useSelector, useDispatch } from "react-redux";
import { barClick } from "../actions/bar";

import arrImg from "../images/icon-arrow-down.svg";

const Header = (props)=>{
    const dispatch = useDispatch();
    const isBarClicked = useSelector(state=>state.barToggler);
    
    
    return (
        <nav className="menu-bar">
             <div className="logo">Sunnyside</div>
                <div className={isBarClicked?"change":"bar"}onClick={()=>dispatch(barClick())}>
                    <div className="humberger">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            <div className={isBarClicked?'open menus menu-list':'mobile menus'}>
                <a href=""className="active">About</a>
                <a href="">Services</a>
                <a href="">Proejct</a>
            </div>
            
        </nav>
       
    )

    
}
 

export default Header;