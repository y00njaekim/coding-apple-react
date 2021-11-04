import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let [title, setTitle] = useState(['나이키', '아디다스', '퓨마']);
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [inVal, setInVal] = useState('');
  return (
    <div>
      {
        title.map(function(e, i) {
          return (
            <div key={i}>
              <h3> { e }
                <span onClick={ () => {
                  var temp = [...thumb];
                  temp[i] = temp[i] + 1;
                  setThumb(temp);
                }}>👍</span> { thumb[i] }
              </h3>
            </div>
          )
        })
      }
      <input onChange={ (e) => { setInVal(e.target.value); } }></input>
      <button onClick={ () => {
        let _title = [...title];
        _title.unshift(inVal);
        let _thumb = [...thumb];
        _thumb.unshift(0);
        setTitle(_title);
        setThumb(_thumb);
      }}>버튼</button>
    </div> 
  )
}

export default App