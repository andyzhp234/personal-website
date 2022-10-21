import React from 'react'

export default function Projects() {
  return (
    <div className='projects_box'>
      MY PROJECTS -
      <div className='project_lists'>
        (1) Facebook-marketplace Clone 
        <div className='project_lists_description'>
          Implemented the web frontend using React, Redux and Material-UI including searching, category 
          based filtering, user defined filtering, and user login features.
        </div>
        <div className='project_lists_description'>
          Designed and implemented backend Restful APIs using Express and MongoDB including CRUD 
          operations for searching, listing, and accounting.
        </div>
        <img src="marketplace.JPG" alt="website_img" className='todo_list'/>
        <div className='project_lists_description'>
          <img src="https://img.icons8.com/plasticine/344/react.png" alt="react_icon" />
          <img src="https://img.icons8.com/color/344/redux.png" alt="redux_icon" />
          <img src="https://img.icons8.com/color/344/material-ui.png" alt="material_ui_icon" />
          <img src="https://img.icons8.com/color/344/javascript.png" alt="javascript_icon" />
          <img src="https://img.icons8.com/color/344/nodejs.png" alt="node_icon" />
          <img src="https://img.icons8.com/color/344/mongodb.png" alt="mongodb_icon" />
        </div>
        <a href="http://3.101.90.31/">Visit the Website</a>
      </div>


      <div className='project_lists'>
        (2) To-Do-List (Task Management App)
        <div className='project_lists_description'>
          Implemented the web frontend with pages of user login and create, edit, and delete of checklists using 
          Vue.js and Node.js; maintained user status through token based session management
        </div>
        <div className='project_lists_description'>
          Designed and implemented backend using Django Restful Framework, backed by SQLite for 
          persistent storage; provided RESTful APIs for user authentication and CRUD operations of checklists.
        </div>
        <img src="to-do.JPG" alt="website_img" className='todo_list'/>
        <div className='project_lists_description'>
          <img src="https://img.icons8.com/color/344/vue-js.png" alt="vue_icon" />
          <img src="https://img.icons8.com/color/344/django.png" alt="django_icon" />
          <img src="https://img.icons8.com/color/344/javascript.png" alt="javascript_icon" />
          <img src="https://img.icons8.com/color/344/nodejs.png" alt="node_icon" />
        </div>
        <a href="https://to-do-list-andyzhp.herokuapp.com/">Visit the Website</a>        
      </div>
      
      <div className='project_lists'>
        (3) Into the Space! (Javascript Mini-game)
        <div className='project_lists_description'>
          Implemented the mini game using Vanilla Javascript, HTML, CSS
        </div>
        <div className='project_lists_description'>
          Looking for Adventures??
        </div>
        <div className='project_lists_description'>
          Looking for game where you can explore endless spaces??
        </div>
        <div className='project_lists_description'>
          This game is the right for you !
        </div>
        <img src="space-mini-game.JPG" alt="website_img" className='todo_list'/>
        <div className='project_lists_description'>
          <img src="https://img.icons8.com/color/344/javascript.png" alt="javascript_icon" />
          <img src="https://img.icons8.com/color/344/html-5--v1.png" alt="css_icon" />
          <img src="https://img.icons8.com/color/344/css3.png" alt="css_icon" />
          <img src="https://img.icons8.com/color/344/nodejs.png" alt="node_icon" />
        </div>
        <a href="https://explore-space-game.herokuapp.com/index.html">Visit the Website</a>      
      </div>


      <div className='project_lists'>
        (4) More Coming Soon..
      </div>
    </div>
  )
}
