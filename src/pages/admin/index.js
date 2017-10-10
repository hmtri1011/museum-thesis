import React, { PureComponent } from 'react'
import Editor from '../../components/Editor'
import Sidebar from '../../components/Sidebar'

//import styles from './admin.css'

class AdminPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isAdmin: false
    }
  }

  _checkPassword = (user, pass) => {
    return user === 'admin' && pass === 'admin'
  }

  _verifyAdmin = e => {
    e.preventDefault()
    const user = this._user.value
    const pass = this._password.value
    if (this._checkPassword(user, pass))
      this.setState({
        isAdmin: true
      })
  }
  render() {
    //const { isAdmin } = this.state
    return (
      <div>
        <Sidebar />
        <Editor />
      </div>
    )
    /*return isAdmin
      ? <div>
          <Header />
          <Breadcrumb
            pageName="Admin"
            pageSummary="Admin Page"
            location={location}
          />
          <Sidebar />
          <Editor />
        </div>
      : <div className={styles.adminContainer}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h4>Enter Your Username And Password For Login</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="user">Username:</label>
                    <input
                      type="text"
                      placeholder="Username"
                      ref={node => (this._user = node)}
                      className="form-control"
                      id="user"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>

                    <input
                      type="password"
                      placeholder="Password"
                      ref={node => (this._password = node)}
                      className="form-control"
                      id="pwd"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-default"
                    onClick={this._verifyAdmin}
                  >
                    Submit
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div> */
  }
}

export default AdminPage
