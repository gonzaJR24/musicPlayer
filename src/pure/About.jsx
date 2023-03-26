import React from 'react'
import {motion} from "framer-motion"

const About = () => {
    return (
        <div>
           <motion.h2
           initial={{scale:0}}
           transition={{ duration: 1}}
           animate={{scale:1}}
           >About us</motion.h2>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolore adipisci laborum laudantium? Natus delectus ea quibusdam labore quae numquam harum exercitationem! Molestiae totam labore ducimus itaque incidunt repellat voluptates.
        <br /><br />
        At iste dolorem expedita ex vitae exercitationem nobis, iusto ea sint beatae deserunt sit ratione modi commodi dignissimos voluptas, sequi perferendis assumenda! Rerum facere beatae corrupti impedit delectus corporis officia.
        <br /><br />
        Ipsam vel doloremque numquam beatae suscipit veritatis consequuntur voluptates sequi ipsum aliquam pariatur cumque delectus odio cum nobis facilis iusto, quaerat voluptas? Beatae perspiciatis illum praesentium doloremque quod voluptate suscipit?
        </p> 
        </div>
    )
}

export default About
