import { useState } from "react";
import "./works.scss";
import hackerrank from "../../portfolioimages/hackerrank.png";
import leetcode from "../../portfolioimages/leetcode.jpeg";
import gfg from "../../portfolioimages/gfg.png"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/leetcodeicon.png",
      title: "LeetCode",
      desc:
        "Solving Daily Challenges and Practicing on Virtual & Live Contests. ",
      img:
       leetcode,
       link: "https://leetcode.com/ayushisoni987/",
    },
    {
      id: "2",
      icon: "./assets/gfg icon.png",
      title: "GFG Practice",
      desc:
        "Use for practicing good Quality questions & Logic building.",
      img:
        gfg,
        link: "https://auth.geeksforgeeks.org/user/ayushisoni987/practice/",
    },
    {
      id: "3",
      icon: "./assets/hackerrankicon.png",
      title: "Hackerrank",
      desc:
        "For building basic concepts of OOPS in various languages.",
      img:
        hackerrank,
        link: "https://www.hackerrank.com/ayushisoni987?hr_r=1",
        
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} target="_blank" rel="noreferrer">Visit Profile</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
