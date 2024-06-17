import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


const key = "AIzaSyBG17NoeFa5EnRxy-uyUHQB2SnWa0sn_LQ"
export default function MyMap({lat, long}: any) {

    const latitude = Number(lat)
    const longitude = Number(long)

    return (
        <APIProvider apiKey={key}>
        <Map
          style={{width: '40vw', height: '30vh'}}
          defaultCenter={{lat: latitude, lng: longitude}}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker position={{lat: latitude, lng: longitude}} />
        </Map>
        
      </APIProvider>
    )
}