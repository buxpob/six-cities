import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import { Offers, Offer } from '../../types/types';

type MapProps = {
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  },
  points: Offers;
  selectedPoint: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({ city, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker ({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
