import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-gray-800 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-evenly items-center">
        <div className="text-2xl font-bold text-white">
         <Link to="/"><h1>Job Finder</h1></Link>
        </div>
        <div className="text-sm text-gray-300 ">
          <ul className="flex gap-5">
              <Link to="/" className="hover:text-white text-xl hover:underline hover:underline-offset-8   "><li>Home</li></Link>
              <Link to="/favourite" className="hover:text-white text-xl hover:underline hover:underline-offset-8"><li>Favourites</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header