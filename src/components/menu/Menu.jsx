import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Certification</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a className="cv" href="https://drive.google.com/file/d/1IknEl065XWf1z-00jGEPCh8ij3OfETPa/view?usp=sharing" target="_blank" rel="noreferrer"> My Resume</a>
        </li>
      </ul>
    </div>
  );
}
