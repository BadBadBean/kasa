import PropTypes from 'prop-types';

export default function Banner({ backgroundImage, text = "", className = "" }) {

  return (
    <div className={`banner ${className}`}>
      <div
        className="banner__background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <p>{text}</p>
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string
};
