import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';

export function LoadingScreen({onComplete}){
  const [loading, setLoading] = useState(0);
  const loaderRef = useRef(null);
 
  useEffect(()=>{
const counter = { val: 0 };
gsap.to(counter,{
  val:100,
  duration:2,
  ease:"power2.inOut",
  onUpdate:()=>{
    setLoading(Math.round(counter.val));
  },
  onComplete:()=>{
    gsap.to(loaderRef.current,{
      opacity:0,
      duration:1,
      delay: 1,
      onComplete,
    });
    
  }
})
  },[]);

  return (
    <div ref={loaderRef} className="loader">
      <p className="loader-count">{loading}%</p>
    </div>
  );
}