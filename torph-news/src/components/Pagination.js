import React from 'react'
import styles from '../stylesheets/Pagination.module.scss'

const Pagination = ({worldNews, articlesPerPage, currentPage, setCurrentPage}) => {
  let pages = [];

  for(let x = 1; x <= Math.ceil(worldNews/articlesPerPage); x++){
    pages.push(x);
  }

  return (
    <div className={styles.pageButtonContainer}>
        {pages.map((page, index) => {
            return <button className={`${page == currentPage ? styles.pageButtonActive : styles.pageButton }`} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })}
    </div>
  )
}

export default Pagination