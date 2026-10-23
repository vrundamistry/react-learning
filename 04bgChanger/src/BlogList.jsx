const BlogList = ({blogs, title, handleDelete}) => {
    return(
         <div className="max-w-7xl w-full flex flex-col gap-10 duration-100 mx-auto px-10 py-12 relative top-24">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="blog-wrap">
                <div className="blog-list grid grid-cols-3 gap-6">
                    
                    {blogs.map((blog) => (
                        <div className="blog-item border rounded-2xl border-zinc-100 px-5 py-5 shadow-md min-h-32 flex flex-col relative" key={blog.id}>
                            <a onClick={() => handleDelete(blog.id)} className="absolute right-3 top-2 z-30 cursor-pointer">x</a>
                            <h2 className="text-2xl text-blue-950 font-medium mb-2.5">{blog.title}</h2>
                            <p className="mb-4">{blog.body}</p>
                            <p className="mt-auto text-left">- {blog.author}</p>                            
                        </div>                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogList