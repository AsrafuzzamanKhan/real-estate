
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../Pin/Pin'

const Map = ({ items }) => {
    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => <Pin item={item} key={item.id}></Pin>)}
        </MapContainer>
    )
}

export default Map