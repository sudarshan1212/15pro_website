import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    ScrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",

      ...scrollProps,
    },
  });
};
export const animateWithGsapTimeLine = (
  timeline,
  rotationRef,
  rotationState,
  firstTarger,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "poser2,inOut",
  });
  timeline.to(
    firstTarger,
    {
      ...animationProps,
      ease: "power2,inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2,inOut",
    },
    "<"
  );
};
