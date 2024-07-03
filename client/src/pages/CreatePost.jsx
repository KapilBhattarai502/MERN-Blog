import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules={
    toolbar:[
        [{'header':[1,2,false]}],
        ['bold','italic','underline','strike','blockquote'],
        [{'list':'ordered'},{'list':'bullet'},{'indent':'+1'}],
        ['link','image'],
        ['clean']
    ]
};
const formats=[
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent',
    'link','image'

];
 
const CreatePost = () => {
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent]=useState('');
    const [files,setFiles] = useState('');

    async function createNewPost(event){
        const data=new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        event.preventDefault();
        console.log(files);

        const response = await fetch('http://localhost:8000/post',{
            method:'POST',
            body:data,
        });
        console.log(await response.json())

    }
  

  return (
    <form onSubmit={createNewPost} enctype="multipart/form-data">
        <input type='title' placeholder={'Title'} value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
        <input type='summary' placeholder={'Summary'} onChange={(event)=>{setSummary(event.target.value)}}/>
        <input type='file' onChange={(event)=>{setFiles(event.target.files)}} />
        <ReactQuill value={content}  modules={modules} formats={formats} onChange={(newvalue)=>{setContent(newvalue)}}/>
        <button style={{marginTop:'5px'}}>Create post</button>
       

    </form>
  )
}

export default CreatePost