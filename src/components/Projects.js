import React from 'react'

export default function Projects() {

  const [projectClicked, setClicked] = React.useState({
    'chat-app':false,
    'space-mini-game':false,
    'marketplace':false,
    'to-do-list':false,
  });

  function clickedProject(e) {
    setClicked(prevState=> ({
      ...prevState,
      [e.target.name] : true,
    }))
  }
  function closedProject(e) {
    let target = e.target.id
    if (target === 'chat-app1') {
      target = 'chat-app';
    } if (target === 'space-mini-game1') {
      target = 'space-mini-game';
    } else if (target === 'marketplace1') {
      target = 'marketplace';
    } else if (target === 'to-do-list1') {
      target = 'to-do-list';
    }
    setClicked(prevState=> ({
      ...prevState,
      [target] : false,
    }))
  }

  return (
    <div className='projects_content'>
      <div className='project_title'>
        My Projects
      </div>

      <div className='project_sections'>
        <div className='project_type_one' data-aos="fade-up">
          <div className='project_name'>
            Real Time Chat App
          </div>
          {projectClicked['chat-app'] === false ?
            <img 
              name="chat-app"
              src="chat_app.JPG"
              alt="website_img"
              className='project_items'
              onClick={clickedProject}
            />:
            <div
              className='project_clicked_view first'
            >
              <div
                id="chat-app"
                className='project_black_wrapper'
                onClick={closedProject}
              >
                <div className='project_name'>
                  Real Time Chat App
                </div>
                <div className='project_skills'>
                  <p>React</p>
                  <p>Django</p>
                  <p>SQLite</p>
                </div>
                <div
                  id="chat-app1"
                  onClick={closedProject}
                  className='goto_project_lower'
                >
                  <a href='https://github.com/andyzhp234/realtime-group-chat-app'>Github</a>
                  <a href='https://realtime-group-chat-andyzhp.herokuapp.com/'>Live Demo</a>
                </div>
              </div>
            </div>
          }
          
        </div>

        <div className='project_type_two' data-aos="fade-down">
          <div className='project_name'>
            Into the Space (Javascript Mini Game)
          </div>
          {projectClicked['space-mini-game'] === false ?
            <img
              name="space-mini-game"
              src="space-mini-game.JPG"
              alt="website_img"
              className='project_items'
              onClick={clickedProject}
            />:
            <div
              className='project_clicked_view second'
            >
              <div
                id="space-mini-game"
                className='project_black_wrapper'
                onClick={closedProject}
              >
                <div className='project_name'>
                  Into the Space (Javascript Mini Game)
                </div>

                <div className='project_skills'>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>

                <div
                  id="space-mini-game1"
                  onClick={closedProject}
                  className='goto_project_lower'
                >
                  <a href='https://github.com/andyzhp234/Into-the-space'>Github</a>
                  <a href='https://explore-space-game.herokuapp.com'>Live Demo</a>
                </div>

              </div>
            </div>
          }
        </div>
      
      
      
      </div>
      
      <div className='project_sections'>
        
        
        <div className='project_type_two' data-aos="zoom-in">
          <div className='project_name'>
            To-Do List
          </div>
          {projectClicked['to-do-list'] === false ?
            <img
              name="to-do-list"
              src="to-do.JPG"
              alt="website_img"
              className='project_items'
              onClick={clickedProject}
            />:
            <div
              className='project_clicked_view fourth'
            >
              <div
                id="to-do-list"
                className='project_black_wrapper'
                onClick={closedProject}>
        
                <div className='project_name'>
                  To-Do List
                </div>

                <div className='project_skills'>
                  <p>Vue.js</p>
                  <p>Django</p>
                  <p>SQLite</p>
                </div>

                <div
                  id="to-do-list1"
                  onClick={closedProject}
                  className='goto_project_lower'
                >
                  <a href='https://github.com/andyzhp234/to-do-heroku'>Github</a>
                  <a href='https://andyzhp234.github.io/Into-the-space/'>Live Demo</a>
                </div>


              </div>
            </div>
          }
        </div>





        <div className='project_type_one' data-aos="zoom-in">
          <div className='project_name'>
            Facebook Marketplace Clone
          </div>
          {projectClicked['marketplace'] === false ?
            <img
              name="marketplace"
              src="marketplace.JPG"
              alt="website_img"
              className='project_items'
              onClick={clickedProject}
            />:
            <div
              className='project_clicked_view third'
            >
              <div
                id="marketplace"
                className='project_black_wrapper'
                onClick={closedProject}>
        

                <div className='project_name'>
                  Facebook Marketplace Clone
                </div>

                <div className='project_skills'>
                  <p>MongoDB</p>
                  <p>Express</p>
                  <p>React</p>
                  <p>Node.js</p>
                </div>

                <div
                  id="marketplace1"
                  onClick={closedProject}
                  className='goto_project_lower'
                >
                  <a href='https://github.com/andyzhp234/Facebook-Marketplace-Clone'>Github</a>
                  <a href='http://3.101.90.31/'>Live Demo</a>
                </div>

              </div>
            </div>
          }
        </div>





      </div>

    </div>
  )
}
