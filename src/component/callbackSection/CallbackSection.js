import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './CallbackSection.scss'

import CallbackForm from '../callbackForm/CallbackForm'
import Contact from '../contact/Contact'

function CallbackSection() {
  const sectionRef = useRef();
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollYProgress } = useViewportScroll();
  const xRightTranslate = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [0, 50]);
  const xLeftTranslate = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [0, -50]);

  useLayoutEffect(() => {
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const offsetStart = rect.top + scrollTop - 200;
    const offsetEnd = (offsetStart + rect.height) + 200;
    
    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;
    
    setScrollPercentageStart(elementScrollStart);
    setScrollPercentageEnd(elementScrollEnd);
  }, [setScrollPercentageStart, setScrollPercentageEnd]);

  return (
    <section className="footer" ref={sectionRef}>
      <div className="footerTitle">
        <motion.h2
        style={{ x: xRightTranslate }}
        >
        <span className="borderText">Если у вас</span><span className="black">Остались</span><span className="blue"> вопросы? Задай</span><span className="borderText"> их здесь</span>
        </motion.h2>
        <motion.h2
        style={{ x: xLeftTranslate }}
        >
        <span className="blue">Если у вас</span><span className="borderText">Остались </span><span className="blue">вопросы? </span><span className="black">Задай их</span><span className="borderText"> здесь</span>
        </motion.h2>
      </div>
      <CallbackForm message="Задайте вопрос"/>
      <Contact />
    </section>
  )
}

export default CallbackSection
