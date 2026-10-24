import React from 'react'

function Setting() {
  const reset=()=>{
   localStorage.clear()
  }
  return (
    <div><div className="settings-container">

  <div className="profile-card">
    <img
   src="https://www.deltasigmapi.org/images/default-source/greek-letters-for-petitions/greek-letters-for-petitions-1.jpg?sfvrsn=7fd47a9b_4" 
      alt="Profile"
      className="profile-img"
    />

    <h2>Areesha khan</h2>
    <p>Frontend Developer</p>
  </div>

  <div className="about-card">
    <h3>About the App</h3>
    <p>
      This Task Manager helps you organize your daily work by creating,
      updating, deleting and managing tasks in a simple and efficient way.
      It is built using React and Local Storage to keep your tasks saved.
    </p>
  </div>

  <button className="reset-btn" onClick={reset}>
    Reset All Tasks
  </button>

</div></div>
  )
}

export default Setting