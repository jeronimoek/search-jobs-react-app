import React, {useState} from 'react';

function JobListHeader(props){
  
  const jobLoc = props.jobsInfo.jobLoc
  const jobTitle = props.jobsInfo.jobTitle
  
  const resumenTexto = () => {
    let txt = ""
    if(jobLoc || jobTitle){
      txt += "Empleos"
      if(jobTitle){
        txt += " de " + jobTitle
      }
      if(jobLoc){
        txt += " en " + jobLoc
      }
    }
  }

  return(
    <div className="JobListHeader">
      <p className="subtitle">{resumenTexto()}</p>
      <p className="order">
        {"Ordenar por: "} 
        <a className={props.orderBy === "title" ? "active" : null} onClick={()=>props.onSetOrderByChange("title")}>nombre</a>
        {" - "} 
        <a className={props.orderBy === "date" ? "active" : null} onClick={()=>props.onSetOrderByChange("date")}>fecha</a>
      </p>
    </div>
  )
}

export default JobListHeader