import {useState, useEffect} from 'react';

const useLocation = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0, 
    error: null, 
    resolved: false
  })

  useEffect(() => {
    const handleSuccess = (data) => {
      const latNoise = Math.random();
      const lngNoise = Math.random();

      const lat = data.coords.latitude + latNoise;
      const lng = data.coords.longitude + lngNoise;

      console.log(lat, lng)

      setCoords({
        lat: lat,
        lng: lng,
        error: null,
        resolved: true
      })
    }

    const handleError = (err) => {
      console.log(err.message)

      setCoords( prev => ({
        ...prev,
        error: err.message,
        resolved: true
      }))
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return coords;
}

export default useLocation
