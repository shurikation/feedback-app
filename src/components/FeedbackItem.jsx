import PropTypes from 'prop-types'
import Card from './shared/Card';

function FeedbackItem({ item }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem;

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}