import useMouseMove from '../hooks/useMouseMove';

const Mouse = () => {
  const position = useMouseMove();

  const mouseStyles = {
    position: 'absolute',
    height: '50px',
    width: '50px',
    backgroundColor: 'purple',
    left: position.x - 25,
    top: position.y - 100,
    borderRadius: "50%"
  }

  return (
    <div style={{position: 'relative'}}>
      <h1>Mouse Component!</h1>
      <p>your current mouse position x is {position.x} and y {position.y}</p>
      <div style={mouseStyles}></div>
    </div>
  )

};

export default Mouse;