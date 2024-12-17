import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFavourite, removeFavourite } from "./favouriteSlice";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const favourite = useSelector((state) => state.favouriteSlice);
  console.log("Current Job ID:", id);

  const [job, setJob] = useState(null);
  const isFavourite = favourite.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/mockdata/jobs.json");
        console.log(response.data);
        const mockJob = response.data.jobs.find(
          (res) => res.id === parseInt(id, 10)
        );
        setJob(mockJob);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    fetchData();
  }, [id]);

  const toggleFav = () => {
    if (job) {
      if (isFavourite) {
        dispatch(removeFavourite(job));
      } else {
        dispatch(addFavourite(job));
      }
    }
  };

  if (!job) {
    return (
      <div className="container mx-auto py-6">
        <p className="text-center text-gray-500">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">{job.title}</h1>
          <p className="text-gray-400 mt-3 text-xl">{job.company} - {job.location}</p>
        </div>

        <div className="bg-gray-850 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300 text-lg mb-4">{job.description}</p>
          <p className="text-gray-500 italic mb-6">Job Type: {job.type}</p>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={toggleFav}
            className={`px-8 py-3 rounded-full text-white font-semibold transition transform hover:scale-105 ${
              isFavourite ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
          </button>

          <a
            href="/applyform"
            className="px-8 py-3 rounded-full bg-teal-500 text-white font-semibold transition transform hover:scale-105 hover:bg-teal-600"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
