import React, { useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Container,Next, Prev } from './SliderStyles'
import { images } from '../../constants/constants'


const Slider = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <Container>
            <AnimatePresence
                initial={false}
                custom={direction}

            >
                <motion.img 
                    key={page}
                    src={images[imageIndex]}
                    style={{width: '100%', height: '100%', position: 'relative',  objectFit : 'cover',
                    overflow: 'hidden' , borderRadius: '10px'}}
                    custom={direction}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                />
            </AnimatePresence>
            <Next
                whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                whileTap={{scale: 0.9}}
                onClick={() => paginate(1)}
            >
                <IoChevronForward/>
            </Next>
            <Prev
                whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                whileTap={{scale: 0.9}}
                onClick={() => paginate(-1)}
            >
                <IoChevronBack/>
            </Prev>
        </Container>
    )
}

export default Slider
