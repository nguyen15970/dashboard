import "./navbar.scss"
import { BiSearchAlt2 } from "react-icons/bi";
import { MdLanguage, MdNotificationsNone, MdOutlineMessage, MdFullscreenExit } from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";
import { AiOutlineUnorderedList} from "react-icons/ai";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <BiSearchAlt2/>
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon"/>
            English
          </div>
          <div className="item">
            <RiMoonLine className="icon"/>
          </div>
          <div className="item">
            <MdFullscreenExit className="icon"/>
          </div>
          <div className="item">
            <MdNotificationsNone className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdOutlineMessage className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AiOutlineUnorderedList className="icon"/>
          </div>
          <div className="item">
            <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"
             alt=""  className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}
