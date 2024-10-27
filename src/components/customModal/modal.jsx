export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal bg-sky-300 relative">
      <div className="modal-content transition py-10">
        <div className="header">
          <span
            onClick={onClose}
            className="close-modal-icon float-right cursor-pointer text-xl"
          >
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body ">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
