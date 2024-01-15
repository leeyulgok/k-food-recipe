import AnimateDraw from "../animate/AnimateDraw";
import { motion } from "framer-motion";

const Check = () => {
  const checkVariants = {
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
    <AnimateDraw color={"green"}>
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M12,26 L22,36 L42,16"
        variants={checkVariants}
      />
    </AnimateDraw>
  );
};

export default Check;
