import React, { FC } from "react";
import classes from './pagination.module.css';
import { Link } from 'react-router-dom';

type PaginationProps = {
    productsPerPage: number;
    totalProducts: number;
    paginate:(page:number) => void;
}

export const PaginationPages: FC<PaginationProps> = ({ productsPerPage, totalProducts, paginate }: PaginationProps): JSX.Element => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }
    

    return (
        <div>
            <ul className={classes.pagination_pages}>
                {pageNumbers.map((number) => (
                    <li className={classes.page_item} key={number}>
                        <Link to="#" className={classes.page_link} onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
