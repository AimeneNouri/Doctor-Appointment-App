import React from "react";
import "../assets/css/dashboard.css";
import { database, auth } from "../firebase";

class UserProfile extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            users : {
                nom : "",
                prenom: "",
                adresse: "",
                tel: "",
                uid: "",
                password: "",
                email: ""
            },

            type : 'password',
            visible : 'false'
        }
    }

    showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'text' ? 'password' : 'text',
        });
    }

    componentDidMount(){
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
                        uid: data.uid,
                        password: data.password,
                        email: data.email
                    }
                })
            });
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
                          <div className="row">
                            <div className="col-12 col-sm-auto mb-3">
                              <div className="mx-auto" style={{ width: "140px" }}>
                                <div
                                  className="d-flex justify-content-center align-items-center rounded"
                                  style={{
                                    height: "140px",
                                    backgroundColor: "rgb(233, 236, 239)",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "rgb(166, 168, 170)",
                                      font: "bold 8pt Arial",
                                    }}
                                  >
                                    140x140
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                  <span style={{ color: "#9368E9" }}>{this.state.users.nom} {this.state.users.prenom}</span>
                                </h4>
                                <p className="mb-0">
                                  <span> {this.state.users.email} </span>
                                </p>
                                <div className="mt-2">
                                  <span class="file-input btn btn-primary btn-file" style={{ cursor: "pointer" }}>
                                    <i className="fa fa-fw fa-camera" /> Browse&hellip;{" "}
                                    <input type="file" multiple />
                                  </span>
                                </div>
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
                              <a href className="active nav-link">
                                Settings
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content pt-3">
                            <div className="tab-pane active">
                              <form className="form" noValidate>
                                <div className="row">
                                  <div className="col">
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Nom</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="nom"
                                            placeholder="Smith"
                                            value={this.state.users.nom}
                                          />
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Prenom</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="prenom"
                                            placeholder="john"
                                            value={this.state.users.prenom}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Adresse</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="adresse"
                                            placeholder="Ain Chock, Casablanca"
                                            value={this.state.users.adresse}
                                          />
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Telephone</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="numTel"
                                            placeholder="+1-202-555-0155"
                                            value={this.state.users.tel}
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
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col mb-3">
                                        <div className="form-group">
                                          <label>About</label>
                                          <textarea
                                            style={{ height: "100%" }}
                                            className="form-control"
                                            rows={5}
                                            placeholder="My Bio"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6 mb-3">
                                    <div className="mb-2">
                                      <b>Changer Password</b>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group password">
                                          <label>Mot de passe Actuel</label>
                            
                                          <input
                                            className="form-control input-fields"
                                            type={this.state.type}
                                            placeholder="••••••"
                                            value={this.state.users.password}
                                          />
                                          <i onClick={this.showHide} class={this.state.type === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon'}></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Nouveau Mot de passe</label>
                                          <input
                                            className="form-control"
                                            type={this.state.type}
                                            placeholder="••••••"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>
                                            Confirmer{" "}
                                            <span className="d-none d-xl-inline">
                                              Mot de passe
                                            </span>
                                          </label>
                                          <input
                                            className="form-control"
                                            type={this.state.type}
                                            placeholder="••••••"
                                          />
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
