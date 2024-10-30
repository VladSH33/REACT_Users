import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

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
        <div>
            <h1>Станица пользователя {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{user.id}. {user.name}</div>
            }

            <h1>
                Посты:
            </h1>

            {isPostLoading
                ? <Loader/>
                : <div>
                    {posts.map(post =>
                        <div key={post.id} style={{marginTop: 15}}>
                            <hr/>
                            <h5>{post.title}</h5>
                            <div>{post.body}</div>
                        </div>
                )}
                </div>
            }
        </div>
    );
};

export default UserIdPage;