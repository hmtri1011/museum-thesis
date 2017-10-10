import React from 'react'
import styles from './sidebar.css'
import { push as Menu } from 'react-burger-menu'

const Sidebar = () => {
  return (
    <div>
      <div className={styles.toggle_arrow} />
      <Menu className={styles.sidebar_container}>
        <div className={styles.sidebar_item}>
          ABC
        </div>
        <div className={styles.sidebar_item}>
          ABC
        </div>
        <div className={styles.sidebar_item}>
          ABC
        </div>
        <div className={styles.sidebar_item}>
          ABC
        </div>
      </Menu>
    </div>
  )
}

export default Sidebar
