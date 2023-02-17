
import React, { useState } from 'react';
import './createPostForm.css';

const CreatePostForm = ({callback}) => {
    // const {register,handleSubmit:handleFormSubmitReactHookForm} = useForm()
    const [textArea, setTextArea] = useState("");
    const [photoFile, setPhotoFile] = useState("");
    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value);
    }
    const handlePhotoFileChange = (event) => {
        console.log(event.target.files[0])
        setPhotoFile(event.target.files[0]);

    }

    const handleSubmit = async (event) => {
        // a try catch block for this function would allow for better Error
        // for this function I have refactored out the separate request and send the whole post in formData
        event.preventDefault();
        // console.log(photoFile)
        // array_buffer []

        let token = window.localStorage.getItem('token')
        const formData = new FormData();
        formData.append('user_id', window.localStorage.getItem('user_id'));

        if (photoFile) formData.append('photoFile', photoFile);

        if (textArea) formData.append('message', textArea);

        const response = await fetch('/posts', {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        });
        const data = await response.json();
        if (response.status !== 201) {
            console.log(data.error);
        } else {
            console.log('post created');
            setTextArea('');
            setPhotoFile(null);
            callback(true);
        }

    }

    return (

        <div className='container'>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <input placeholder="   What's on your mind?" type='text' value= {textArea} onChange= {handleTextAreaChange}></input>
                <button className="post-btn" type='submit' >Create post</button>

            </form>
            {/*<form className='create-post-form' >*/}
            {/*    <input  type="file"  name="picture" />*/}
            {/*    <button type='submit'>Upload Photo</button>*/}
            {/*</form>*/}
        </div>


    )
}

export default CreatePostForm;