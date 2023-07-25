
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserRgChoice from './Pages/UserRgChoice'
import EnteringNumber from './Pages/EnteringNumber'
import OtpVerify from './Pages/OtpVerify'
function App() {
  return (
    <>
      <div >
        <Routes>
          <Route path='/' element={<UserRgChoice/>}/>
          <Route path='/enteringNumber' element={<EnteringNumber/>}/>
          <Route path='/otpverify' element={<OtpVerify/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
