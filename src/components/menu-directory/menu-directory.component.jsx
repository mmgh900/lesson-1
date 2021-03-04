import React from 'react'
import MenuItem from "../menu-item/menu-item.component";
import './menu-directory.styles.scss'

class MenuDirectory extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            sections: [
                {
                    title: 'کلاه ها',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'جاکت ها',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'کفش های ورزشی',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'زنانه',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'مردانه',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]

        }
    }

    render() {
        return (
            <div className='menu-directory'>
                {this.state.sections.map(({title, imageUrl, id, size}) =>
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                )}
            </div>
        )
    }
}

export default MenuDirectory
