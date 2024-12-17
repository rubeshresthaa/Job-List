import { useEffect, useState } from "react"
import { fetchJobs } from "../hooks/fetchjobs";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import JobCard from '../components/JobCard';


const Home = () => {
  const[jobs,setJobs]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const jobsPerPage=4;

  useEffect(()=>{
    const getJobs=async()=>{
      const data=await fetchJobs();
      setJobs(data)
    };
    getJobs();

  },[])

  const indexOfLastJob=currentPage*jobsPerPage;
  const indexOfFirstJob=indexOfLastJob-jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);


  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center">Job Listing</h1>
      {currentJobs.map((job)=>(
        <div className="space-y-2">
          <JobCard key={job.id} job={job} />
          </div>
        
      ))}
      <div className="flex justify-evenly mt-5">
      <button
      disabled={currentPage===1}
      onClick={()=>setCurrentPage((prev)=>prev-1)}
      >
        <GrFormPrevious size={30} className="hover:scale-125" />
      </button>
        <button
        disabled={indexOfLastJob >= jobs.length}
        onClick={()=>setCurrentPage((prev)=>prev+1)}
        >
          <MdNavigateNext size={30} className="hover:scale-125" />
        </button>

      </div>
    </div>
  )
}
export default Home