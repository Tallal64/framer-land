import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 0.8 },
    },

    scrollBtn: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const slider = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",

      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="mt-10 relative z-10 overflow-hidden h-[88vh]">
      {/* wrapper */}
      <div className="max-w-screen-xl mx-auto h-full">
        {/* text container */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="w-1/2 h-full relative z-20 flex flex-col justify-center gap-y-7 font-DM_Sans"
        >
          <motion.h1
            variants={textVariants}
            className="uppercase text-3xl font-medium tracking-widest text-indigo-700"
          >
            m talal khan
          </motion.h1>

          <motion.h2 variants={textVariants} className="text-7xl font-semibold">
            Web developer <br /> and UI designer
          </motion.h2>

          <motion.div variants={textVariants} className="flex gap-x-4">
            <motion.button
              variants={textVariants}
              className="border px-6 py-3 capitalize rounded-lg cursor-pointer"
            >
              see the latest works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="px-6 py-3 capitalize rounded-lg bg-white text-black cursor-pointer"
            >
              contact me
            </motion.button>
          </motion.div>
          <div>
            <motion.img
              variants={textVariants}
              animate="scrollBtn"
              src="./scroll.png"
              alt="img"
              className="w-12 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>

      {/* sliding text */}
      <motion.div
        variants={slider}
        initial="initial"
        animate="animate"
        className="font-DM_Sans w-[80%] font-bold absolute whitespace-nowrap bottom-[-120px] text-[#ffffff09] capitalize text-[50vh] "
      >
        football gym coding
      </motion.div>

      {/* img container */}
      <div className="h-full absolute top-0 right-0">
        <img
          className="w-full h-full object-cover"
          src="./hero.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
