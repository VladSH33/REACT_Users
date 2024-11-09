import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../../components/UI/Loader/Loader';

import './UserIdPage.less'

const UserIdPage = () => {
    const params = useParams()
    const [user, setUser] = useState({});
    const [posts, setPost] = useState([]);
    const [fetchUserById, isLoading, error] = useFetching(async() => {
        const response = await PostService.getById(params.id)
        setUser(response.data);
    })

    const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
        const response = await PostService.getPostsByUserId(params.id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchUserById()
        fetchPosts()
    }, [])

    return (
        <div className='page'>
            <div className="container">
                <div className="user__box">
                    <h2>User-id: {params.id}</h2>
                    
                    {isLoading
                        ? <Loader/>
                        : <div>
                            <div>Name: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <div>Phone: {user.phone}</div>
                            <div>Website: {user.website}</div>
                        </div>
                    }


                    {/* <div>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                    </div> */}
                    

                </div>
                    
                <div className="posts">
                    <h2 className='posts__title'>
                        Posts:
                    </h2>

                    {isPostLoading
                        ? <Loader/>
                        : <div>
                            {posts.map(post =>
                                <div key={post.id} className='post'>
                                    <h5 className='post__title'>{post.title}</h5>
                                    <div className='post__text'>{post.body}</div>
                                </div>
                        )}
                        </div>
                    }
                </div>
                    
            </div>
        </div>
    );
};

export default UserIdPage;