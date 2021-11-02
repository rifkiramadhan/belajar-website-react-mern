import React from 'react';
import { Button, Gap } from '../..';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="Post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam mollitia ex. Quam, consequuntur repudiandae eos voluptatum labore commodi adipisci aspernatur nesciunt fugiat libero provident, deleniti expedita! Quos eius laborum autem labore magnam, magni veritatis ducimus dolorem fugit explicabo? Cupiditate pariatur incidunt, modi impedit maxime tempora reprehenderit beatae facilis alias!</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem;
