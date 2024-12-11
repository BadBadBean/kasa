import PropTypes from "prop-types";

const Collapse = ({ data, titleKey, descriptionKey }) => {
  return data.map((item, id) => (
    <details key={id}>
      <summary>{item[titleKey]}</summary>
      <div>{item[descriptionKey]}</div>
    </details>
  ));
};

export default Collapse;

Collapse.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  titleKey: PropTypes.string,
  descriptionKey: PropTypes.string,
};
