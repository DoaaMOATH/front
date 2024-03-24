import React from 'react'
import MyNavbar from '../inc/MyNavbar'
import MyCards from '../inc/MyCards'
import '../styles/HomePages.css'
export default function HomePages() {
    return (
        <div className='container'>
            <MyNavbar />
            <div className='card-container'>
                <MyCards img="https://images.fineartamerica.com/images-medium-large/beautiful-flower-davor-sintic.jpg" title="Hello Everyone" description="Hello i'm here in homepage" btnTitle="Flower info"/>
                <MyCards img="https://pics.craiyon.com/2023-10-22/f095f55a94964e9482cb23119e7476ac.webp" title="Hello " description="Hi i'm here" btnTitle="More info"/>
                <MyCards img="https://www.beautifulflowerpictures.com/blog/wp-content/uploads/2015/10/dahlia_pair_its_a_girl_21181.jpg" title="Hello " description="Hi i'm here" btnTitle="More info"/>
            </div>

        </div>
    )
}
