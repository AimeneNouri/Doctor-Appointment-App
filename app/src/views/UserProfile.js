import React from "react";
import { Alert } from "react-bootstrap";
import "../assets/css/dashboard.css";
import { database, auth } from "../firebase";

class UserProfile extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            users : {
                nom : '',
                prenom: '',
                adresse: '',
                tel: '',
                uid: '',
                password: '',
                email: ''
            },
            error: '',
            loading: false,
            type : 'password',
            visible : 'false'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'text' ? 'password' : 'text',
        });
    }

    componentDidMount(){
        this.mapUserDetailsToState();   
    }

    mapUserDetailsToState(){
        database
        .ref('users/' + auth.currentUser.uid)
        .once("value")
        .then(snapshot => {
            const data = snapshot.val();
            this.setState({
                users : {
                    nom : data.nom,
                    prenom: data.prenom,
                    adresse: data.adresse,
                    tel: data.tel,
                    uid: auth.currentUser.uid,
                    password: data.password,
                    email: data.email,
                    image: data.image
                }
            })
        });
    }

    handleSubmit(e){
        e.preventDefault()
       const userRef= database.ref("users/" +auth.currentUser.uid)
      
      userRef.set({
        nom : this.state.users.nom?this.state.users.nom:'' ,
        prenom: this.state.users.prenom?this.state.users.prenom:'' ,
        adresse: this.state.users.adresse?this.state.users.adresse:'' ,
        tel: this.state.users.tel,
        uid: this.state.users.uid?this.state.users.uid:'',
        password: this.state.users.password?this.state.users.password:'',
        email: this.state.users.email?this.state.users.email:''

      })
        try {
          this.setState({
            error: '',
            loading: true
          })
          alert("Profile Updated successfully")
        } catch {
          this.setState({
            error: "Failed to Log in"
          })
        }

        this.setState({
          loading: false
        })

    }

    render(){
        return (
            <div className="content">
              <div className="col">
                <div className="row">
                  <div className="col mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="e-profile">
                          {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
                          <div className="row">
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                  <span style={{ color: "#9368E9" }}>{this.state.users.nom} {this.state.users.prenom}</span>
                                </h4>
                                <p className="mb-0">
                                  <span> {this.state.users.email} </span>
                                </p>
                              </div>
                              <div className="text-center text-sm-right">
                                <div className="text-muted">
                                  <small>Joined {auth.currentUser.metadata.creationTime}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <a className="active nav-link" style={{ color: "#9368E9" }}>
                                Settings
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content pt-3">
                            <div className="tab-pane active">
                              <form className="form" noValidate onSubmit={this.handleSubmit}>
                                <div className="row">
                                  <div className="col">
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>First Name</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="nom"
                                            placeholder="Smith"
                                            value={this.state.users.prenom}
                                            
                                            onChange = {(e)=>{
                                          
                                                 var users = {...this.state.users};
                                                 users.prenom = e.target.value;
                                                 this.setState({users});

                                            }}    
                                          />
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="prenom"
                                            placeholder="john"
                                            value={this.state.users.nom}
                                            onChange = {(e)=>{
                                          
                                              var users = {...this.state.users};
                                              users.nom = e.target.value;
                                              this.setState({users});

                                         }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Address</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="adresse"
                                            placeholder="Ain Chock, Casablanca"
                                            value={this.state.users.adresse}
                                            onChange = {(e)=>{
                                          
                                              var users = {...this.state.users};
                                              users.adresse = e.target.value;
                                              this.setState({users});

                                         }}
                                          />
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Phone Number</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="numTel"
                                            placeholder="+1-202-555-0155"
                                            value={this.state.users.tel}
                                            onChange = {(e)=>{
                                          
                                              var users = {...this.state.users};
                                              users.tel = e.target.value;
                                              this.setState({users});

                                         }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Email</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="user@example.com"
                                            value={this.state.users.email}
                                            onChange = {(e)=>{
                                          
                                              var users = {...this.state.users};
                                              users.email = e.target.value;
                                              this.setState({users});

                                         }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6 mb-3">
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group password">
                                          <label>Current Password</label>
                                          <input
                                            className="form-control input-fields"
                                            type={this.state.type}
                                            placeholder="••••••"
                                            ref={this.passwordRef}
                                            defaultValue={this.state.users.password}
                                            onChange = {(e)=>{
                                          
                                              var users = {...this.state.users};
                                              users.password = e.target.value;
                                              this.setState({users});

                                            }}
                                            readOnly
                                          />
                                          <i onClick={this.showHide} className={this.state.type === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon'}></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-5 offset-sm-1 mb-3"></div>
                                </div>
                                <div className="row">
                                  <div className="col d-flex justify-content-end">
                                    <button className="btn btn-primary" type="submit">
                                      Save Changes
                                    </button>
                                    <a className="btn btn-danger" href="/profile" style={{marginLeft: "10px"}}>
                                      Cancel
                                    </a>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default UserProfile;
