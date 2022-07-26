export const accordionVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: -10,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
