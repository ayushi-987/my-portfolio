import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: " Coursera",
      title: "2020",
      img:
        "./assets/pm.jpeg",
      icon: "assets/download.png",
      desc:
        "Certification in Data Structures and Performance, University of California San Diego on Coursera.",
      link: "https://www.coursera.org/account/accomplishments/verify/QA9KVJLGCLT9"
    },
    {
      id: 2,
      name:"Udemy",
      title: "2021",
      img:
        "./assets/pc.png",
      icon: "assets/download.png",
      desc:
        " Getting started with Unity, Complete C Unity Game Developer 3D.",
      featured: true,
    },
    {
      id: 3,
      name: "Cousera",
      title: "2020",
      img:
        "./assets/pm.jpeg",
      icon: "assets/download.png",
      desc:
        "Certification in Build Your Portfolio Website with HTML and CSS, Coursera Project Network",
        link:"https://www.coursera.org/account/accomplishments/verify/SRTRETAF9732",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Certifications</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
             <a href={d.link}><img className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
