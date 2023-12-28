import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor]=useState('mario');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog= {title,body,author};
        fetch('http://localhost:3000/blogs/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label >Blog Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Blog Body</label>
                <textarea required 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Author</label>
                <select 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
               <button>Add Blog</button>
                
            </form>
        </div>
     );
}
 
export default Create;