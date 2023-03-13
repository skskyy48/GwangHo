import React, { useEffect } from 'react';
import './App.css';
import { GoogleAdvertise } from './components/GoogleAdvertise';
import Header from './components/Header';

import DDayCalc from './pages/DDayCalc';

function App() {
  

  return (
    <div className="App">
      <GoogleAdvertise
        client="ca-pub-7735668451615080"
        slot="5999780999"
        format="auto"
        responsive="true"
        layoutKey="-fz+6a+19-cg+hh"
      />
      <Header />
    </div>
  );
}

/* <!-- display -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7735668451615080"
     data-ad-slot="5999780999"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({}); */
export default App;
