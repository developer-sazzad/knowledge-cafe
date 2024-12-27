import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Header></Header>
        <main className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </main>
      </div>
    </>
  )
}

export default App