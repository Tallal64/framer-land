import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="font-DM_Sans">
      {/* navbar */}
      <div className="max-w-screen-xl mx-auto flex justify-between py-6">
        {/* logo */}
        <div className="uppercase font-bold">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#">Blue Date</a>
          </motion.span>
        </div>

        {/* icons */}
        <motion.div
          className="flex gap-x-4 items-center"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <motion.a href="#" variants={variants}>
            <FaFacebook size={18} />
          </motion.a>

          <motion.a href="#" variants={variants}>
            <FaLinkedin size={18} />
          </motion.a>

          <motion.a href="#" variants={variants}>
            <FaSquareXTwitter size={18} />
          </motion.a>

          <motion.a href="#" variants={variants}>
            <FaInstagram size={18} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
