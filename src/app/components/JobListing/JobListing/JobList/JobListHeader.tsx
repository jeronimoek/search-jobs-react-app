import {JobInfoInterface} from "../../../../interfaces/jobInterfaces"


interface Props {
  onSetOrderByChange: (order: string)=>void;
  orderBy: string
  quantity: number
  jobsInfo: JobInfoInterface
}

const JobListHeader = (props: Props): JSX.Element=> {
  
  const jobsLoc = props.jobsInfo.jobsLoc
  const jobsTitle = props.jobsInfo.jobsTitle
  const resumenTexto = () => {
    let txt: string = ""
    if(jobsLoc || jobsTitle){
      txt += "Empleos"
      if(jobsTitle){
        txt += " de " + jobsTitle
      }
      if(jobsLoc){
        txt += " en " + jobsLoc
      }
    }
    return txt
  }
  return(
    <div className="JobListHeader">
      <p className="subtitle">{resumenTexto()}</p>
      <p className="order">
        {"Ordenar por: "} 
        <button className={props.orderBy === "title" ? "active" : ""} onClick={()=>props.onSetOrderByChange("title")}>nombre</button>
        {" - "} 
        <button className={props.orderBy === "date" ? "active" : ""} onClick={()=>props.onSetOrderByChange("date")}>fecha</button>
      </p>
    </div>
  )
}

export default JobListHeader