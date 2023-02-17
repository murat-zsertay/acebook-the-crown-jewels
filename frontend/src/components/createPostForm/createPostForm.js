import React, { useState } from 'react';
import './createPostForm.css';
const CreatePostForm = ({callback}) => {
    const [textArea, setTextArea] = useState("");

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (textArea !== '') {
            let response = await fetch('/posts', {
                method: 'post',
                headers: {
                    'Authorization': "Bearer " + window.localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: window.localStorage.getItem('user_id'), message: textArea})
            })

            const data = await response.json()

            if(response.status !== 201) {
                console.log(data.error)
            } else {
                console.log("post created");
                setTextArea('');
                callback(true);
            }
        }
    }

    return (
        <div className='container'>
            <form className='create-post-form'>
                <input placeholder="   What's on your mind?" type='text' value= {textArea} onChange= {handleTextAreaChange}></input>
                <button className="post-btn" type='submit' onClick={handleSubmit}>Create post</button>
            </form>
        </div>
    )
}

export default CreatePostForm;