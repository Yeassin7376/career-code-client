import React from "react";
import { motion } from "motion/react";
import team1Img from '../../assets/team/team1.jpg'
import team2Img from '../../assets/team/team2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1Img}
            animate ={{
              y: [100, 150, 100],
              transition:{duration:5, repeat:Infinity}
            }}
            // transition={{duration: true, repeat:Infinity}}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            src={team2Img}
            animate ={{
              x: [100, 150, 100],
              transition:{duration:10,delay: 5, repeat:Infinity},
              
            }}
            // transition={{duration: true, repeat:Infinity}}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
                animate={{
                    rotate:180,
                    transition: {duration: 4}
                 }}
                className="text-5xl font-bold">Newest jobs For You!</motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: [
                  "#f74d3c",
                  "#f4f73c",
                  "#67f73c",
                  "#3cf7f4",
                  "#3c6cf7",
                  "#f73ccc",
                  "#f73c7d",
                ],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );

};

export default Banner;
