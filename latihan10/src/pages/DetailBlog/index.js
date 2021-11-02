import React from 'react';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="Thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam mollitia ex. Quam, consequuntur repudiandae eos voluptatum labore commodi adipisci aspernatur nesciunt fugiat libero provident, deleniti expedita! Quos eius laborum autem labore magnam, magni veritatis ducimus dolorem fugit explicabo? Cupiditate pariatur incidunt, modi impedit maxime tempora reprehenderit beatae facilis alias!</p>
        </div>
    )
}

export default DetailBlog;
