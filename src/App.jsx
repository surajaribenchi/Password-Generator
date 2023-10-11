
import {useState,useCallback,useEffect} from 'react'


function App() {
const[length,setlength]=useState(8);
const[number,setnumber]=useState(false);
const[char,setchar]=useState(false);
const[Password,setPassword]=useState("");

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str+="0123456789"
  if(char) str+="?/+=}{][)(.,><!@#$%^&-_*"
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
},[length,number,char,setPassword])
const handleclick=()=>{
  var copyText = document.getElementById("hello");
  navigator.clipboard.writeText(copyText.value);
}
useEffect(() => {
  passwordGenerator()
}, [length,number,char,passwordGenerator])
  return (
    <>
    <div className='w-full flex items-center justify-center' style={{height:"800px"}}>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4 flex">
        <input id='hello' type="text" value={Password} className='outline-none w-full py-1 px-3 my-3' placeholder='password' readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 h-8 my-3' onClick={handleclick}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 mb-2">
        <input 
        type="range"
        min={6}
        max={100} 
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 mb-2">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setnumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 mb-2">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
      
      </div>
      </div>
      </>
  )
}

export default App
