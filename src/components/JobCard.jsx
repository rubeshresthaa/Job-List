import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:border-blue-500 transition-all">
      <h2 className="text-xl font-semibold text-white">{job.title}</h2>
      <p className="text-gray-400 mt-2">
        {job.company} <span className="text-gray-500">| {job.location}</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">{job.type}</p>
      <div className="mt-4">
        <Link
          to={`/job/${job.id}`}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-colors"
        >
          View Job Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
