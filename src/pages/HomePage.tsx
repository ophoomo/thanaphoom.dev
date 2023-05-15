import { motion, useScroll, useSpring } from "framer-motion";
import PhoomPixel from '../assets/pixel.webp'
import Contact from "../components/Contact";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div>
        <div className="text-center cursor-pointer">
          <img src={PhoomPixel} alt="NoImage" width={256} height={256} />
        </div>
        <h1 className="text-center mb-0">
          Hi,<span>👋</span> I'm THANAPHOOM
        </h1>
        <h3 className="text-center mt-2">
          <b className="primary">Full Stack</b> Developer from Thailand
        </h3>
      <Contact />
      </div>
    </div>
  );
}
