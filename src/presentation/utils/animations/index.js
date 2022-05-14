export const variantImg = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 1,
      when: "beforeChildren",
    },
  },
};

export const variantText = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const variantButton = {
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const navbarAnimation = {
  hidden: { y: -100 },
  show: { y: 0 },
};

export const fromUp = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const fromDown = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const imageAnimation = {
  hidden: { scale: 2, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const reveal = {
  hidden: { x: -1000 },
  show: { x: 0 },
};

export const textAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
