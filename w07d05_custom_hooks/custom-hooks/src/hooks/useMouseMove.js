import {useState, useEffect} from 'react';

const useMouseMove = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (event) => {
      // console.log(event)
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  });

  return position;
}

export default useMouseMove;