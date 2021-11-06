import React from 'react';
import { Button, Input, Upload, TextArea, Gap, Link } from '../../components';
import './createBlog.scss';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Crete New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog;
