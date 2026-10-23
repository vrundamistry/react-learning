import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BGChanger1 from './BGChanger1'
import BGChanger2 from './BGChanger2'
import BGChanger3 from './BGChanger3'
import BlogList from './BlogList'

function App() {
  
  const [page, setPage] = useState('home') 

  const [blogs, setBlogs ]= useState([
    
      { id: 1, title: "Understanding React Hooks in 2026", body: "Hooks completely changed how we write React components. In this post, we will explore useState, useEffect, and custom hooks to manage state seamlessly without writing class components.",
        author: "Priya Sharma", date: "2026-10-01" },
      { id: 2, title: "Tailwind CSS vs Vanilla CSS", body: "Utility-first frameworks are taking over. We will look at how Tailwind CSS accelerates UI development compared to writing traditional custom CSS files, especially for responsive mobile designs.",
        author: "Rahul Verma", date: "2026-10-03" },
      {
        id: 3, title: "Mastering Next.js Server Components", body: "Next.js App Router and React Server Components allow us to ship zero JavaScript to the client for specific UI parts. Let's build a fast, SEO-friendly blog index to demonstrate.",
        author: "Ananya Desai", date: "2026-10-05" },
      { id: 4, title: "State Management: Redux Toolkit vs Zustand", body: "While Redux Toolkit remains a standard for enterprise applications, Zustand offers a much simpler, boilerplate-free alternative for smaller projects. Here is a side-by-side comparison.", author: "Priya Sharma", date: "2026-10-06"
      },
      { id: 5, title: "Optimizing Web Vitals in React", body: "Core Web Vitals matter for SEO. Learn how to implement lazy loading, optimize image delivery, and reduce layout shifts to score a perfect 100 on Lighthouse.", author: "Kavita Rao",
        date: "2026-10-07" }
    ]);


  const handleDelete = (id) => {
    //alert(id)
    const newBlogs = blogs.filter((blog) => blog.id != id)
    setBlogs(newBlogs)
  }

  return (
    <>
      <Navbar page={page} setPage={setPage} />

      {/* “Fake” client‑side navigation with state */}
      {page === 'home' && <Home />}
      {page === 'bgchanger1' && <BGChanger1 />}
      {page === 'bgchanger2' && <BGChanger2 />}
      {page === 'bgchanger3' && <BGChanger3 />}
      {page === 'bloglist' && <BlogList blogs={blogs} title="Blog List" handleDelete={handleDelete} />}
      {/* {page === 'bloglist' && <BlogList blogs={blogs.filter((blog) => blog.author === 'Priya Sharma')} title="Blog By Author" />} */}
      
    </>
  )
}

export default App
