const Notification = (props) => {
  //  Write your code here.
  const { icon, messageText, className } = props;
  return (
    <div className={`container ${className}`}>
      <img src={icon} className="icon-image" />
      <p className="description">{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      messageText="Information Message"
      className="notification-container-1"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      messageText="Success Message"
      className="notification-container-2"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      messageText="Warning Message"
      className="notification-container-3"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      messageText="Danger Message"
      className="notification-container-4"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
