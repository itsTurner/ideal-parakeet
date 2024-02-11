import { Plate, PlateContent } from '@udecode/plate-common';
import React, { useState } from 'react';
import './JournalLog.css';

function NavBar() {
  return (
    <nav>
      <div className="nav-name">Journal Log</div>
      </nav>
  );
}

function JournalLog() {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', dateTime: '', body: '' });

  const handleBoxClick = (event) => {
    const box = event.currentTarget.parentNode;
    const title = box.querySelector('.title').textContent;
    const dateTime = box.querySelector('.date-time').textContent;
    const body = box.querySelector('.body').textContent;


  
    setPopupContent({ title, dateTime, body });
    setShowPopup(true);
  };

  const handleImgClick = (event) => {
    setShowEditor(true);
  };

  return (
    <div className="JournalLog">
      <NavBar />
      <div className="firstBox">
        <img src="/images/R.png" alt="img" className="firstImg" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body"  onClick={handleBoxClick}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body" onClick={handleBoxClick}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      {showPopup && (
        <div className="popup">
          <h1 className="title">{popupContent.title}</h1>
          <h1 className="date-time">{popupContent.dateTime}</h1>
          <p className="body">{popupContent.body}</p>
          <button className="button" onClick={() => setShowPopup(false)}>Close</button>

        </div>
      )}
      { showEditor && (
        <div className='popup'>
        <Plate>
          <PlateContent placeholder="Type..."  />
        </Plate>
          <button className="button" onClick={() => setShowEditor(false)}>Submit</button>
          <button className="button" onClick={() => setShowEditor(false)}>Close</button>

        </div>
      )}
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body" onClick={handleBoxClick}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body" onClick={handleBoxClick}>
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box">
      <img src="/images/R.png" alt="img" className="img" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body" onClick={handleBoxClick}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="box" >
      <img src="/images/R.png" alt="img" className="img" onClick={handleImgClick} />
        <h1 className="title">Title</h1>
        <h1 className="date-time">date/time</h1>
        <p className="body" onClick={handleBoxClick}>
        Richard William Wheaton III (born July 29, 1972) is an American actor and writer. 
        He portrayed Wesley Crusher on the television series Star Trek: The Next Generation, Gordie Lachance in the film Stand by Me, Joey Trotta in Toy Soldiers, and Bennett Hoenicker in Flubber. 
        Wheaton has also appeared in recurring voice acting roles as Aqualad in Teen Titans, Cosmic Boy in Legion of Super Heroes, and Mike Morningstar/Darkstar in the Ben 10 franchise's original continuity. 
        He appeared regularly as a fictionalized version of himself on the sitcom The Big Bang Theory and in the roles of Fawkes on The Guild, Colin Mason on Leverage, and Dr. Isaac Parrish on Eureka. 
        Wheaton was the host and co-creator of the YouTube board game show TableTop. 
        He has narrated numerous audio books, including Ready Player One and The Martian
        Richard William Wheaton III (born July 29, 1972) is an American actor and writer. 
        He portrayed Wesley Crusher on the television series Star Trek: The Next Generation, Gordie Lachance in the film Stand by Me, Joey Trotta in Toy Soldiers, and Bennett Hoenicker in Flubber. 
        Wheaton has also appeared in recurring voice acting roles as Aqualad in Teen Titans, Cosmic Boy in Legion of Super Heroes, and Mike Morningstar/Darkstar in the Ben 10 franchise's original continuity. 
        He appeared regularly as a fictionalized version of himself on the sitcom The Big Bang Theory and in the roles of Fawkes on The Guild, Colin Mason on Leverage, and Dr. Isaac Parrish on Eureka. 
        Wheaton was the host and co-creator of the YouTube board game show TableTop. 
        He has narrated numerous audio books, including Ready Player One and The Martian
        Richard William Wheaton III (born July 29, 1972) is an American actor and writer. 
        He portrayed Wesley Crusher on the television series Star Trek: The Next Generation, Gordie Lachance in the film Stand by Me, Joey Trotta in Toy Soldiers, and Bennett Hoenicker in Flubber. 
        Wheaton has also appeared in recurring voice acting roles as Aqualad in Teen Titans, Cosmic Boy in Legion of Super Heroes, and Mike Morningstar/Darkstar in the Ben 10 franchise's original continuity. 
        He appeared regularly as a fictionalized version of himself on the sitcom The Big Bang Theory and in the roles of Fawkes on The Guild, Colin Mason on Leverage, and Dr. Isaac Parrish on Eureka. 
        Wheaton was the host and co-creator of the YouTube board game show TableTop. 
        He has narrated numerous audio books, including Ready Player One and The Martian
        Richard William Wheaton III (born July 29, 1972) is an American actor and writer. 
        He portrayed Wesley Crusher on the television series Star Trek: The Next Generation, Gordie Lachance in the film Stand by Me, Joey Trotta in Toy Soldiers, and Bennett Hoenicker in Flubber. 
        Wheaton has also appeared in recurring voice acting roles as Aqualad in Teen Titans, Cosmic Boy in Legion of Super Heroes, and Mike Morningstar/Darkstar in the Ben 10 franchise's original continuity. 
        He appeared regularly as a fictionalized version of himself on the sitcom The Big Bang Theory and in the roles of Fawkes on The Guild, Colin Mason on Leverage, and Dr. Isaac Parrish on Eureka. 
        Wheaton was the host and co-creator of the YouTube board game show TableTop. 
        He has narrated numerous audio books, including Ready Player One and The Martian

        </p>
      </div>
      <header className="App-header">
      </header>
    </div>
  );
}

export default JournalLog;