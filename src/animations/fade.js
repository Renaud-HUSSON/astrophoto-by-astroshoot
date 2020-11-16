export const fadeIn = (duration = 0.3, delay = 0) => {
  return {
    visible: {opacity: 1, y:0, transition: {ease: "easeOut", duration: duration, delay: delay}},
    hidden: {opacity: 0, y:200},
    exit: {opacity: 0, y:200, transition: {ease: "easeOut", duration: duration, delay: delay}}
  }
}

export const fade = (duration = 0.2, delay = 0) => {
  return {
    visible: {opacity: 1, transition: {duration: duration, delay: delay}},
    hidden: {opacity: 0},
    exit: {opacity: 1, transition: {duration: duration, delay: delay}}
  }
}