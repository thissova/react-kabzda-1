import React, {useState} from 'react';
import styles from "./Paginator.module.scss";
type Props = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize: number
}
let Paginator: React.FC<Props> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (<div className={styles.pagination}>
                <span className={currentPage === 1 ? styles.selected : styles.unselected}
                      onClick={() => onPageChanged(1)}>
                    {1 + ' | '}
                </span>
            <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>←</button>

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span key={p} className={currentPage === p ? styles.selected : styles.unselected}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p + " "}</span>
            })}
            <button disabled={portionCount === portionNumber} onClick={() => setPortionNumber(portionNumber + 1)}>→
            </button>
            <span className={currentPage === pagesCount ? styles.selected : styles.unselected}
                  onClick={() => onPageChanged(pagesCount)}>
                    {' |' + pagesCount}
                </span>
        </div>)
}

export default Paginator;