export const modalContainer = {
  in: {y: 0 },
  out: {y: "-100%" },
  transition: {
    duration: 0.5
  }
}

export const modalButton = {
  in: {scale: 1 },
  out: {scale: 0 },
  transition: {
    delay: 0.6, 
    duration: 0.3
  }
}

export const modalHeader = {
  in: {
    opacity: 1, 
    y: 0 
  },
  out: {
    opacity: 0, 
    y: -50 
  },
  transition: {
    delay: 0.25, 
    duration: 1, 
    type: "spring", 
    bounce: 0.3 
  }
}

export const modalForm = {
  in: {
    opacity: 1, 
    y: 0 
  },
  out: {
    opacity: 0, 
    y: -50 
  },
  transition: {
    delay: 0.35, 
    duration: 1, 
    type: "spring", 
    bounce: 0.5
  }
}