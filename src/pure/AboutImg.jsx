import React from "react";
import {motion} from "framer-motion"

const AboutImg = () => {
  return (
    <div>
      <motion.img
      initial={{opacity:0, x:-300}}
      transition={{duration:1}}
      animate={{opacity:1, x:0}}
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/library/wp-content/uploads/2017/09/13-Places-to-Find-Background-Music-for-Video-Cover-Image-2.jpg"
        className="girl"
        alt=""
      />

      <motion.img
       initial={{opacity:0, x:300}}
       transition={{duration:1}}
       animate={{opacity:1, x:0}}
        src="https://nationaltoday.com/wp-content/uploads/2021/10/Pop-Music-Chart-Day.jpg"
        alt=""
        className="concert"
      />
    </div>
  );
};

export default AboutImg;
