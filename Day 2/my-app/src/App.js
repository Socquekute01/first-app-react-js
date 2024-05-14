import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <table>
        <th>
          <td>number</td>
          <td>name</td>
          <td></td>
          <td></td>
        </th>
        <tr>
          <td>1</td>
          <td>Loc</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      ;<p>Hello</p>
      <span>world</span>
      <br />
      <label>Username</label>
      <input type="text" placeholder="Enter your name" />
      <ul>
        <li>
          <span>ReactJS</span>
        </li>
        <li>
          <h1>HTML</h1>
        </li>
        <li>
          <h4>CSS</h4>
        </li>
      </ul>
      <ol>
        <li>
          <span>ReactJS</span>
        </li>
        <li>
          <h1>HTML</h1>
        </li>
        <li>
          <h4>CSS</h4>
        </li>
      </ol>
      <a
        href="https://www.facebook.com/profile.php?id=100095690977025&locale=vi_VN"
        target="_blank"
      >
        Facebook link
      </a>
      <form>
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="number" />
        <br />
        <input type="checkbox" /> <label>HTML</label>
        <input type="radio" /> <label>CSS</label>
        <button style={{ cursor: "pointer" }}>Login</button>
      </form>
    </div>
  );
}

export default App;

// margin

// padding 

// font-weight
// font-size
// text-decoration
// text-overflow

// background-color : backgroundColor: 
// background-image

// display: flex , grid

// postion: relative, absolute, fixed

// cursor: pointer
