import "./widget.scss"
import {  BsFillPersonFill } from "react-icons/bs";
import { BiChevronUp, BiCart } from "react-icons/bi";
import { RiMoneyDollarCircleLine ,RiWallet2Line} from "react-icons/ri";




export const Widget = ({type}) => {

  let data;

  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
        data={
            title:"USERS",
            isMoney:false,
            link: "See all users",
            icon:  <BsFillPersonFill 
                        className="icon"
                        style={{background:"rgba(255,0,0,0.2)",color:"crimson"}}
                    />          
        };
    break;
    case "order":
        data={
            title:"ORDER",
            isMoney:false,
            link: "View all orders",
            icon:  <BiCart 
                        className="icon"
                        style={{background:"rgba(218,165,32,0.2)",color:"goldenrod"}}
                    />          
        };
    break;
    case "balance":
        data={
            title:"BALANCE",
            isMoney:false,
            link: "see details",
            icon:  <RiWallet2Line 
                        className="icon" 
                        style={{background:"rgba(128,0,120,0.2)",color:"purple"}}
                    />          
        };
    break;
    case "erarning":
        data={
            title:"ERARNING",
            isMoney:false,
            link: "see details",
            icon:  <RiMoneyDollarCircleLine 
                        className="icon"
                        style={{background:"rgba(0,128,0,0.2)",color:"green"}}
                    />          
        };
    break;
    default: break;
  }
  
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>

        </div>
        <div className="right">
            <div className="percentage positive">
              <BiChevronUp className="up-icon"/>  {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

    