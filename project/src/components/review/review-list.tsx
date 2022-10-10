import { comments } from '../../mocks/comments';
import ItemReviewScreen from './review-item';

export default function ListReviewsScreen(): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((review) => <ItemReviewScreen review={review} key={review.id}/>)}
    </ul>
  );
}
