import React from 'react'
import styles from '../stylesheets/Pagination.module.scss'

const Pagination2 = ({nearFuture, nearFuturePerPage, currentNearFuture, setCurrentNearFuture}) => {
  let pages = [];

  for(let y = 1; y <= Math.ceil(nearFuture/nearFuturePerPage); y++){
    pages.push(y);
  }

  return (
    <div className={styles.pageButtonContainerNearFuture}>
        {pages.map((page, index) => {
            return <button className={`${page == currentNearFuture ? styles.pageButtonNFActive : styles.pageButtonNF }`} key={index} onClick={() => setCurrentNearFuture(page)}>{page}</button>
        })}
    </div>
  )
}

export default Pagination2