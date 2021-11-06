import React, { useEffect } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const {dataBlog} = useSelector(state => state.homeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
        .then(result => {
            const responseAPI = result.data;

            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
        })
        .catch(err => {
            console.log('error: ', err);
        })
    }, [dispatch])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog') } />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                                key={blog._id} 
                                image={`http://localhost:4000/${blog.image}`}
                                title={blog.title}
                                body={blog.body}
                                name={blog.author.name}
                                date={blog.createdAt}
                                 />
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home;
