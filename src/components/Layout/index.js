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
        <span className="tags top-tag-html">&lt;html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags"> &lt;/body&gt; </span>
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
