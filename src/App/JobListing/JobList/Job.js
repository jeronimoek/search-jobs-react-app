import React, {useState} from 'react';

function Job(props){
  const job = props.job
  const company = job.company

  var citiesNames = ""
  job.cities.map(city => {
    citiesNames += `${city.name}, ${city.country.name}. `
  })

  const millisNow = new Date().getTime()
  const millisThen = new Date(job.createdAt).getTime()
  const secondsSinceThen = Math.round((millisNow - millisThen)/1000)
    
  var createdAgo = ""
  if(secondsSinceThen < 1){
    createdAgo = "just now"
  } else if(secondsSinceThen < 60){
    createdAgo = `${secondsSinceThen} seconds ago`
  } else if(secondsSinceThen < 60*60){
    createdAgo = `${Math.round(secondsSinceThen/(60))} minutes ago`
  } else if(secondsSinceThen < 60*60*24){
    createdAgo = `${Math.round(secondsSinceThen/(60*60))} hours ago`
  } else if(secondsSinceThen < 60*60*24*30){
    createdAgo = `${Math.round(secondsSinceThen/(60*60*24))} days ago`
  } else if(secondsSinceThen < 60*60*24*365){
    createdAgo = `${Math.round(secondsSinceThen/(60*60*24*30))} months ago`
  } else {
    createdAgo = `${Math.round(secondsSinceThen/(60*60*24*365))} years ago`
  }

  return(
    <div className={`Job ${props.selected ? "selected" : ""}`} onClick={()=>{props.onSelectedJobIdChange(job.id)}}>
      <h3>{job.title}</h3>
      <h3 className="subtitle"><a href={company.websiteUrl}>{company.name}</a></h3>
      <h3 className="subtitle">{citiesNames}</h3>
      <p className="jobDate">{createdAgo}</p>
    </div>
  )
}

export default Job