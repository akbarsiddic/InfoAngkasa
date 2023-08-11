'use client'

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence , useInView, useAnimation} from 'framer-motion';

interface Props {
    children: JSX.Element;
}
 

export const PageWrapper = ({ children } : Props) => {
    const ref = useRef(null);

    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if(isInview) {
            controls.start('visible');
        }
    }, [controls, isInview]);


    return(
    <>
        <div
        ref={ref}
        >
            <motion.div
                variants={
                    {
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 15 },
                    }
                }
                initial="hidden"
                animate={controls} 
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 0.25 }}
            >
                {children}
            </motion.div>
            </div>  
    </>
)};