import './App.css';

function NavBar() {
  return (
    <nav>
      <div className="nav-name">Journal Log</div>
      </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="firstBox">
      <img src="/images/R.png" alt="img" className="firstImg" />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>        
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body">
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;