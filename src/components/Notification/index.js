// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="notificationContent">{children}</div>
      <GrFormClose className="closeIcon" />
    </div>
  )
}

export default Notification
