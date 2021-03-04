import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, key, imageUrl, size}) => (
    <div className={`menu-item--${size} menu-item`}>
        <div className='menu-item__background' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='menu-item__content'>
            <h1 className='menu-item__title'>{title}</h1>
            <span className='menu-item__subtitle'>خرید کنید.</span>
        </div>
    </div>
)

export default MenuItem;
