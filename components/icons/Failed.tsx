import AnimateDraw from "../animate/AnimateDraw";
import { motion } from "framer-motion";

const Failed = () => {
  const xVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };
  
  return (
    <AnimateDraw color={"red"}>
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M16,16 L36,36"
        variants={xVariants}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M36,16 L16,36"
        variants={xVariants}
      />
    </AnimateDraw>
  );
};

export default Failed;
