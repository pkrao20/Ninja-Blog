import { useParams,useHistory } from "react-router-dom/cjs/react-router-dom";

import FetchData from "./FetchData";
const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const { Data: blog, Ispending, error } = FetchData('http://localhost:3000/blogs/' + id);
    const handleSubmit=()=>{
        fetch('http://localhost:3000/blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
       
        <div className="blog-details">
            {error && <div>{error}</div>}
            {Ispending && <div>Loading......</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleSubmit}>Delete</button>
                </article>
                
            )}
        </div>
    );
}
 
export default BlogDetails;