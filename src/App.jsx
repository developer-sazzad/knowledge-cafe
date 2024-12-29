import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddtoBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log('Reading Time')

    // Remove the blog form bookmarks
    const reminingBookmarks = bookmarks.filter (bookmark => bookmark.id !== id);
    setBookmarks(reminingBookmarks);
  }
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Header></Header>
        <main className='md:flex gap-10'>
          <Blogs handleAddtoBookmarks={handleAddtoBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </main>
      </div>
    </>
  )
}
// Blogs.propTypes = {
//   handleAddtoBookmarks: ProtoTypes.func
// }
export default App
