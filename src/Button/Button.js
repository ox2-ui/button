import React, { PropTypes } from 'react';

/**
 * Button Component
 */
const Button = props => {
  const { className, style, children, onClick, btn, ...other } = props;

  return (
    <button
      onClick={onClick}
      className={className}
      style={style}
      data-btn={btn || ''}
      {...other}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button display options
   */
  btn: PropTypes.string,
  /**
   * This is what will be displayed inside the button.
   */
  children: React.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Callback function fired when the element is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default Button;
