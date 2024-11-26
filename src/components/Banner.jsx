import PropTypes from 'prop-types';

export default function Banner({ backgroundImage, text = "" }) {
  const brightness = text.trim() === "" ? 0.9 : 0.6;

  return (
    <div className="banner">
      <div
        className="banner__background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `brightness(${brightness})`
        }}
      ></div>
      <p>{text}</p>
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
  backgroundImage: PropTypes.string
};