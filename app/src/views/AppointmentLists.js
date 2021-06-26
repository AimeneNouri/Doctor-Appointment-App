import React from "react";
import '../index.css'
import { database, auth } from "../firebase";


class AppointmentLists extends React.Component{

  state = {
      history: [],
      a:[
        "name",
        "nameh",
      ]
  }

  componentDidMount(){
    const dbRef = database.ref('appointments-lists/' + auth.currentUser.uid);
    const post = dbRef.orderByKey();
    const history = [];
    post.once("value", snap => {
        snap.forEach(child => {
            history.push(child.val());
        })
        this.setState({history:history});
        console.log(this.state.history);
    })
    
  }  

  render(){
    return (
        <div className="content">
          <div className="content">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <table className="content-table"> 
                      <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Start time</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          {this.state.history.map(({day, name, start_Date}) => {
                            return (
                              <tr>
                                <td></td>
                                <td>{name}</td>
                                <td>{day}</td>
                                <td>{start_Date}</td>
                              </tr>
                              
                            )
                          })}
                         
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default AppointmentLists;
