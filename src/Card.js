import PropTypes from 'prop-types';

function Card(props) {
  const {title, text, children} = props;
  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
}
