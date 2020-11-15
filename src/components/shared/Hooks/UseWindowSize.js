const { useState, useEffect } = require("react")

const useWindowSize = () => {
  // State containing the window size
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

  useEffect(() => {
    // function called each time the window is resized
    const handleResize = () => {
      setSize({width: window.innerWidth, height: window.innerHeight})
    }
    
    window.addEventListener("resize", handleResize)

    handleResize()

    // Remove the event listener when the componont dismount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size;
}

export default useWindowSize