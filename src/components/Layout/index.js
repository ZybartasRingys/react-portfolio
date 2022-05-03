import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import MobileNav from '../MobileNav'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <MobileNav />

      <div className="page">
        <div className="top-tags-container">
          <span className="tags top-tags-html">&lt;html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>
        </div>

        <Outlet />
        <div className="bottom-tags-container">
          <span className="tags bottom-tags">&lt;/html&gt;</span>
          <span className="tags bottom-tags"> &lt;/body&gt; </span>
        </div>
      </div>
    </div>
  )
}

export default Layout
