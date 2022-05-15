import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import App from './App'

import Type1 from './routes/Type1'
import Type2 from './routes/Type2'
import Type3 from './routes/Type3'

import About from './routes/About'

import Eduardo from './routes/Eduardo'

import NotFound from './routes/NotFound'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Type1 />}/> {/* Landing page */}
          <Route path='type 1' element={<Type1 />}/>
          <Route path='type 2' element={<Type2 />}/>
          <Route path='type 3' element={<Type3 />}/>

          <Route path='about' element={<About />} />

          <Route path='eduardo' element={<Eduardo />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)