import { motion } from 'framer-motion';

const AnimatedCheckmark = () => {
  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        delay: 0.3,
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 text-green-500 flex-shrink-0"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
        variants={circleVariants}
      />
      <motion.polyline
        points="22 4 12 14.01 9 11.01"
        variants={checkVariants}
      />
    </motion.svg>
  );
};

export default AnimatedCheckmark;
