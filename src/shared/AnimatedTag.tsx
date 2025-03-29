import { ReactNode, useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  boxVarient: Record<string, Object>;
};

const AnimatedTag = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleAnimation = useCallback(
    (shouldAnimate: boolean) => {
      controls.start(shouldAnimate ? "visible" : "hidden");
    },
    [controls]
  );

  useEffect(() => {
    handleAnimation(inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={props.boxVarient}
      initial="hidden"
      animate={controls}
      transition={{ type: "tween", duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
export default AnimatedTag;