import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapProps {
  place?: {
    name?: string;
    latitude?: number;
    longitude?: number;
  };
}

export const MapComponent = ({ place }: MapProps) => {
  return (
    <MapContainer
      center={[place?.latitude, place?.longitude]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[place?.latitude, place?.longitude]}>
        <Popup>{place?.name}</Popup>
      </Marker>
    </MapContainer>
  );
};
