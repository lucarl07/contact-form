import { useState, useEffect } from 'react';

/** Special thanks to Edwin from DEV for showing this 
 * custom hook to fade React components.
 * 
 * The original function was modified according to this 
 * project's resources, such as TypeScript & Tailwind CSS.
 * 
 * Source article: https://dev.to/ekeijl/simple-react-fade-animation-hook-5dp8
 */
export default function useFade(initial: boolean) {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const animation = show ? "animate-in" : "animate-out"
  const fadeProps = { animation, onAnimationEnd }

  return {isVisible, setVisible: setShow, fadeProps};
}