import "./topbar.scss";
import Person from "@mui/icons-material/Person"
import Mail from "@mui/icons-material/Mail"
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ayushi.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9140423919</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span onClick={(e) => {window.location.href ='mailto:ayushisoni987@gmail.com';}} >ayushisoni987@gmail.com</span>
          </div> 
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
