import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTag = ({ children, boxVarient }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            variants={boxVarient}
            initial="hidden"
            animate={controls}
            transition={{ type: "tween", duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}
export default AnimatedTag;