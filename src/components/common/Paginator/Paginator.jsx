import React from "react";
import styles from "./Paginator.module.scss"


let Paginator = ({totalUsersCount, pageSize, pagesInLine, multiplier, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    let valuesInLine = pagesInLine * multiplier


    for (let i = 1; i <= pagesInLine; i++) {
        pages.push(i + valuesInLine)
    }
    return (
        <div>
            <div className={styles.pagination}>
                <span className={currentPage === 1 ? styles.selected : styles.unselected}
                      onClick={() => onPageChanged(1)}>
                    {1 + ' | '}
                </span>
                <button disabled={multiplier === 0} onClick={() => props.setMultiplierSmaller(1)}>←</button>
                {pages.map(p => {
                    return <span className={currentPage === p ? styles.selected : styles.unselected}
                                 onClick={() => onPageChanged(p)}>
                        {p + ' '}
                    </span>
                })}
                <button disabled={multiplier === Math.floor(pagesCount / pagesInLine)} onClick={() => props.setMultiplierBigger(1)}>→
                </button>
                <span className={currentPage === pagesCount ? styles.selected : styles.unselected}
                      onClick={() => onPageChanged(pagesCount)}>
                    {' |' + pagesCount + ' '}
                </span>
            </div>
        </div>
    )
}


export default Paginator