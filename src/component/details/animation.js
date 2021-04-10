export const buttonDetail = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0.8,
    y: -30,
  },
  transition: {
    duration: 0.4,
    ease: "easeOut"
  }
}

export const photoDetail = {
  in: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1, 
    }
  },
  out: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1, 
    }
  }
}

export const item = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    scale: 0.9,
    y: 25
  },
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
}

export const Header = {
  in: {
    opacity: 1,
    x: 0
  }, 
  out: {
    opacity: 0,
    x: 30
  },
  transition: {
    duration: 0.75,
    ease: "easeOut"
  }
}

export const Description = {
  in: {
    opacity: 1,
    x: 0
  }, 
  out: {
    opacity: 0,
    x: 20
  },
  transition: {
    delay: 0.2,
    duration: 0.75,
    ease: "easeOut"
  }
}

export const photoTitle = {
  in: {
    opacity: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    y: -20
  },
  transition: {
    delay: 0.4,
    duration: 0.6,
  }
}

export const photoOne = {
  in: {
    opacity: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    y: -20
  },
  transition: {
    delay: 0.5,
    duration: 0.6,
  }
}

export const photoTwo = {
  in: {
    opacity: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    y: -20
  },
  transition: {
    delay: 0.6,
    duration: 0.6,
  }
}

export const photoThree = {
  in: {
    opacity: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    y: -20
  },
  transition: {
    delay: 0.7,
    duration: 0.6,
  }
}