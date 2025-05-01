import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Categories = () => {
    const categories = useLoaderData();

    return (
        <div>
              <h1 className='font-bold text-xl'>All Category</h1>
              <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category =>(
                        <NavLink 
                        key={category.id}
                        className={'btn bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold'}
                        to={`/category/${category.id}`}
                        >{category.name}</NavLink>
                    ))
                }
              </div>
              
        </div>
    );
};

export default Categories;