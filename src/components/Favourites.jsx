import { useDispatch, useSelector } from "react-redux"
import { removeFavourite } from "./favouriteSlice";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourite=useSelector((state)=>state.favouriteSlice)
   const dispatch=useDispatch();
   const handleRemove=(job)=>{
    dispatch(removeFavourite(job))
   }

   if (favourite.length === 0) {
    return (
      <div className="container mx-auto py-6">
        <p className="text-center text-gray-400 text-2xl">
          No favourite jobs added yet.
        </p>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Favourite Jobs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favourite.map((job)=>(
          <div  key={job.id}
          className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
             <div>
              <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
              <p className="text-gray-400">{job.company} - {job.location}</p>
              <p className="text-gray-300 mt-2">{job.description.slice(0, 70)}...</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link
                to={`/job/${job.id}`}
                className="text-blue-400 hover:text-blue-300"
              >
                View Details
              </Link>
              <button
                onClick={() => handleRemove(job)}
                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}
export default Favourites