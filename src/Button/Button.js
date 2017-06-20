import PropTypes from 'prop-types';
import React from 'react';

/**
 * Button Component
 */
const Button = (
  {
    btn,
    children,
    className,
    onClick,
    style,
    ...other
  },
) => (
  <button
    className={className}
    data-btn={btn || ''}
    onClick={onClick}
    style={style}
    {...other}
  >
    {children}
  </button>
);

Button.defaultProps = {
  btn: '',
  className: '',
  style: {},
};

Button.propTypes = {
  /**
   * Button display options
   */
  btn: PropTypes.string,
  /**
   * This is what will be displayed inside the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Callback function fired when the element is clicked.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default Button;
