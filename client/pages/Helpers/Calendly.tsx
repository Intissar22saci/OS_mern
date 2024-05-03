"use client"
import React, { useEffect } from 'react';


const Calendly = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
      <div>
            <div
      className="calendly-inline-widget w-[100vw] min-w-[320px] h-[950px] md:h-[750px] "
      data-url="https://calendly.com/operating-system/book-a-call" ></div>
    </div>
  )
}

export default Calendly