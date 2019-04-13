import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-dedpth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            {notifications
              && notifications.map(notification => (
                  <li key={notification.id}>
                    <span className="pink-text">{notification.user}</span>
                    {' '}
                    <span>{notification.content}</span>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
