import { createContext } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  threshold: number;
  triggerOnce: boolean;
  anim: string;
  delay: number;
  children: React.ReactNode;
}

export const InViewContext = createContext<boolean>(false);

const InviewObserver = ({ threshold, triggerOnce, anim, delay, children }: Props) => {

  const observerOptions = {
    threshold: threshold,
    triggerOnce: triggerOnce,
    delay: delay,
  }

  const { ref, inView } = useInView(observerOptions);

  return(
    <InViewContext.Provider value={inView}>
      <div className={`observer-${anim} ${inView ? `visible-${anim}` : `hidden-${anim}`}`} 
        ref={ref}>
        {children}
      </div>
    </InViewContext.Provider>
  );
}

export default InviewObserver;