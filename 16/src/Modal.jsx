import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Modal extends React.Component {
  render() {
    const {isOpen, children} = this.props;
    const modalStyle = isOpen ? {display: 'block'} : {display: 'none'};
    const modalClass = cn("modal", {"fade show": isOpen});

    return (
      <div className={modalClass} style={modalStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.Header = function Header({children, toggle}) {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      ></button>
    </div>
  );
};

Modal.Body = function Body({children}) {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = function Footer({children}) {
  return <div className="modal-footer">{children}</div>;
};
// END
