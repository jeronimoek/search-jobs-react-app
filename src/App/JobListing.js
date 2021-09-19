import React, {useState} from 'react';
import JobDesc from './JobListing/JobDesc'
import JobList from './JobListing/JobList'

function JobListing(props){

  const [selectedJobId, setSelectedJobId] = useState("")
  
  const handleSelectedJobIdChange = (newSelectedJobId) => {
    setSelectedJobId(newSelectedJobId)
  }

  const jobs = []
  
  props.data.jobs.map(job => {
    if(job.title.toUpperCase().indexOf(props.jobTitle.toUpperCase()) === -1){
      return
    }
    let count = 0
    job.cities.map(city => {
      if(city.country.name.toUpperCase().indexOf(props.jobLoc.toUpperCase()) >= 0){
        count++
      }
    })
    if(count == 0){
      return
    }
    jobs.push(job)
  })

  const selectedJob = jobs.find(job => job.id == selectedJobId)

  const jobsInfo = {
    jobsLoc:    props.jobLoc,
    jobsTitle:  props.jobTitle
  }

  return(
    <div className="JobListing">
      <JobList jobs={jobs} onSelectedJobIdChange={handleSelectedJobIdChange} jobsInfo={jobsInfo} selectedJob={selectedJob}/>
      <JobDesc selectedJob={selectedJob}/>
    </div>
  )
}

export default JobListing