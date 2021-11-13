
export const headerAnimation = {
    hidden: { opacity: 0, x: 0, y: -100},
    show: { opacity: 1, x: 0, y: 0 },
  }

export const imageAnimation = {
    hidden: { scale: 1.5, opacity: 0},
    show: { opacity: 1, scale: 1}
}

export const navbarAnimation = {
  hidden: { y: -100 },
  show: { y: 0}
}

export const reveal = {
  hidden: { x: -700},
  show: {x: 0}
}

export const cardAnimation = {
  hidden: { scale: .5, opacity: 0},
  show: { scale: 1, opacity: 1}
}

export const leftAppear = {
  hidden: { opacity: 0, x: -500},
  show: { opacity: 1, x: 0}
}

export const rightAppear = {
  hidden: { opacity: 0, x: 500},
  show: { opacity: 1, x: 0}
}

export const bottomAppear = {
  hidden: { opacity: 0, y: 500},
  show: { opacity: 1, y: 0}
}

export const topAppear = {
  hidden: { opacity: 0, y: -500},
  show: { opacity: 1, y: 0}
}
