import React, { useState } from 'react';

export const Categories = (props) => {
    const [categories, setCategories] = useState(props.categories);

    return (
        <div style={{ borderRadius: '0px 50px 0px 0px' }}  
        className='flex flex-col w-28 h-full px-5 fixed left-0 top-60 py-10 space-y-8 bg-white drop-shadow-xl'>
            {categories.map((category, i) => (
                <a className={`text-sm text-neutral-800 font-${category.selected? 'semibold ml-2' : 'mediums'} border-main tracking-wide`}
                 href={category.link} key={i}>{category.category}</a>
            ))}
        </div>
    );
};
