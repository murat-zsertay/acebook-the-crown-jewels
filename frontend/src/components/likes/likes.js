import React, { useEffect, useState } from 'react';

const handleClick = () => {

}
const Likes = ({ navigate }) => {
    const [post, setPost] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [isUpdated, setIsUpdated] = useState(false);

    console.log(token)
    const formData = new FormData();
    formData.append('user_id', window.localStorage.getItem('user_id'));
    useEffect(() => {
        if(token && (isUpdated || post.length === 0)) {
            fetch(`${window.location.pathname}/likes`, {
                method:"post",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body:formData
            })
                .then(response => response.json())
                .then(async data => {
                    window.localStorage.setItem("token", data.token)
                    setToken(window.localStorage.getItem("token"))
                })
        }
    }, [token, isUpdated]);



    if(token) {
        return(
            <>
                <button onClick={}>Like</button>
            </>
        )
    }
}

export default Likes;