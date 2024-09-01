import { useState, useCallback ,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [nmbr , setnmbr] = useState(false)
  const [charac ,setcharc] = useState(false)
  const [Password , setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenertor = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (nmbr) str += "0123456789" 
    if (charac) str += "!@#$%^&*()_+-=[]{}|;':" 

    for (let i = 1; i < length; i++) {
      let char= Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  },[length,nmbr,charac, setpassword])
  useEffect(()=>{
    passwordGenertor()
  },[length,nmbr,charac, passwordGenertor])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 '
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer '
          onChange={(e) => {setlength(e.target.value)}}
          name="" 
          id="" 
          />
            <label htmlFor="">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked = {nmbr}
          name="" 
          id="numberInput" 
          onChange={() => {
            setnmbr((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked = {charac}
          name="" 
          id="characterInput" 
          onChange={() => {
            setcharc((prev) => !prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
  )
}

export default App
