import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <table>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Naveen</td>
          <td>21</td>
        </tr>
      </table>
      <Footer/>
    </div>
  );
}

export default App;
