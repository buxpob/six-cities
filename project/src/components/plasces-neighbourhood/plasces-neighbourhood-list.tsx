import { offers } from '../../mocks/offers';
import PlacesNeighborhoodItem from './plasces-neighbourhood-item';

export default function PlacesNeighborhoodList(): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => <PlacesNeighborhoodItem offer={offer} key={offer.id}/>)}
    </div>
  );

}
