import {useEffect, useState} from 'react';
import useLocation from '../hooks/useLocation';

const Location = () => {
  const coords = useLocation();
  // const [coords, setCoords] = useState({
  //   lat: 0,
  //   lng: 0, 
  //   error: null, 
  //   resolved: false
  // })

  // useEffect(() => {
  //   const handleSuccess = (data) => {
  //     const latNoise = Math.random();
  //     const lngNoise = Math.random();

  //     const lat = data.coords.latitude + latNoise;
  //     const lng = data.coords.longitude + lngNoise;

  //     console.log(lat, lng)

  //     setCoords({
  //       lat: lat,
  //       lng: lng,
  //       error: null,
  //       resolved: true
  //     })
  //   }

  //   const handleError = (err) => {
  //     console.log(err.message)

  //     setCoords( prev => ({
  //       ...prev,
  //       error: err.message,
  //       resolved: true
  //     }))
  //   }

  //   navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  // }, [])

  return (
    <div>
      <h1>Location</h1>
      {!coords.resolved && <p>fectching your location</p>}
      {(coords.resolved && !coords.error) && <p>your location is {coords.lat}, {coords.lng}</p>}
      {coords.error && <p>{coords.error}</p>}
    </div>
  )

}

export default Location;