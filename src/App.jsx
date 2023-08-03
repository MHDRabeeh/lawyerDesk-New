
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import UserRgChoice from './Pages/UserRgChoice'
import EnteringNumber from './Pages/EnteringNumber'
import OtpVerify from './Pages/OtpVerify'
import Home from './Pages/Home'
import Connections from './Pages/Connections'
import FindLawyer from './Pages/FindLawyer'
function App() {
  return (
    <>
      <div >
        <Routes>
          <Route path='/' element={<UserRgChoice />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/enteringNumber' element={<EnteringNumber />} />
          <Route path='/otpverify' element={<OtpVerify />} />
          <Route path='/connections' element={<Connections/>} />
          <Route path='/findLawyer' element={<FindLawyer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
