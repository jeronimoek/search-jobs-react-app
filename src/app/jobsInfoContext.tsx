import React from "react";

const jobsInfoContext: React.Context<any> = React.createContext({jobsInfo:{
  jobsTitle:"", 
  jobsLoc:"", 
  onJobLocChange:null,
  onJobTitleChange:null
}})

export default jobsInfoContext