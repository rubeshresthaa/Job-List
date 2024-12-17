import axios from "axios"


export const fetchJobs=async ()=>{
  try {
    const response=await axios.get("/mockdata/jobs.json");
    return response.data.jobs;
    
  } catch (err){
    console.error("Error fetching jobs:", err);
    return [];
  }
}