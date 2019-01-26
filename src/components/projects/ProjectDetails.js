import React from 'react'

const ProjectDetails=(props)=> {
    //console.log(props.match.params.id);
    const id=props.match.params.id;
  return (
    <div className="container" section project-details>
    <div className="card z-depth-0">
    <div className ="card-content">
    <span className="card-title"> Project Titles - {id}</span>
    <p> This is project details</p>
    </div>
    <div className="card-action gret lighten-4 grey-text">
    <div>posted by the net ninja</div>
    <div>2nd september</div>
    </div>
    </div>    
    </div>
  )
}
export default  ProjectDetails;