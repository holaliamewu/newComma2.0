import React, { useContext } from 'react'
import { NotificationsContext } from './Layout'

export default function Notifications() {
  const [notifications] = useContext(NotificationsContext);

  return (
    <div className='notifications-container'>
      <h1 className='font-SharpGroteskBold'>Notifications</h1>
      {notifications && notifications.length > 0 ? (
        notifications.map((note, index) => (
          <h5 key={index} className='notification-item'>{note}</h5>
        ))
      ) : (
        <div className='no-notifications'>
          <p className='text-center text-[52px]'>📦</p>
          <p className='text-center'>When you get a notification, it will appear here.</p>
        </div>
      )}
    </div>
  );
}
