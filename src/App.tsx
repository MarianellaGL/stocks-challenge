import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import DashboardPage from './Pages/DashboardPage'
import DetailStockPage from './Pages/DetailStockPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/detail/:id' element={<DetailStockPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
