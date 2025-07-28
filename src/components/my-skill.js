import React from 'react';

export default function Skills() {
  const skills = [
    { src: "img/html.png", alt: "HTML picture", label: "HTML" },
    { src: "img/csspicture.png", alt: "CSS picture", label: "CSS" },
    { src: "img/javascript.png", alt: "JavaScript picture", label: "JavaScript" },
    { src: "img/php.png", alt: "PHP picture", label: "PHP" },
    { src: "img/mysql.png", alt: "MySQL picture", label: "MySQL" },
    { src: "img/python.png", alt: "Python picture", label: "Python" },
    { src: "img/react.png", alt: "React picture", label: "React" },
    { src: "img/wordpress.png", alt: "WordPress picture", label: "WordPress" },
    { src: "img/figma.png", alt: "Figma picture", label: "Figma" }
  ];


return(

<div className=" skill">

{skills.map((skill,index)=>{
 return(
  <div className="myskill" key={index}>
  <img src = {skill.src} alt = {skill.alt}/>
    <p>{skill.label}</p>
  </div>
 );
})}
</div>
);
}

