import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://i.pinimg.com/originals/2a/ff/5d/2aff5d3ae14a89142c768228c5c2d4ec.png"/>
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Setting</a></div>
      </nav>
      <div className='content'>
        <div>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"/>
        </div>
        <div>ava + desc</div>
        <div>My posts</div>
        <div>New posts</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>

    </div>
  );
}



export default App;
