import profile1 from './Images/1.jpg';
import profile2 from './Images/2.jpg';
import profile3 from './Images/3.jpg';

function App() {
  return (
    <div className="App">
      <div className="ui comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={profile1} alt="profile picture" width={150} height={150}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Frederick
            </a>
            <div className="metadata">
              <span>
                Today at : 5:00am
              </span>
            </div>
            <div className="text">
              It's Amazing!!!!
            </div>
          </div>
        </div>
      </div>
      <div className="ui comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={profile2} alt="profile picture" width={150} height={150}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Hansel
            </a>
            <div className="metadata">
              <span>
                Today at : 1:00pm
              </span>
            </div>
            <div className="text">
              I love what I see it's beautiful!!!
            </div>
          </div>
        </div>
      </div>
      <div className="ui comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={profile3} alt="profile picture" width={150} height={150}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Frederick
            </a>
            <div className="metadata">
              <span>
                Today at : 10:00pm
              </span>
            </div>
            <div className="text">
              It's just super waooow!!!!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
