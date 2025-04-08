import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked]= useState([])
  const [readingCount, setreadingCount]= useState(0)

  const handleBookMark =(blog) => {
    setBookmarked([...bookmarked,blog])
  }
 console.log(bookmarked)


 const handleMarkAsRead = (time,id) => {
  const newTime= readingCount + time;
  setreadingCount(newTime);
  handleRemoveFromBookmark(id)
 }

 const handleRemoveFromBookmark = (id) => {
  const remainingBookmark = bookmarked.filter((mark)=> mark.id !== id);
  console.log(remainingBookmark)
 }

 console.log(readingCount);


  return (
    <>
      <Navbar></Navbar>
      
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmark Count: {bookmarked.length}</h1>

          {
            bookmarked.map((marked)=><p className='bg-red-200 p-2 shadow m-2 text-violet-700 font-bold'>{marked.title}</p>)
          }
        </div>
      </div>
      </>
  )
}

export default App
