
import './App.css';

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
//import NewsItem from './component/NewsItem';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Routes>
          {/* <News setProgress={setProgress} apikey={apikey}   pageSize={6} category="sports" /> */}
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="general1" pageSize={6} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={6} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={6} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter >
    </div >
  )

}

export default App;