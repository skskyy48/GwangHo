import React, { useEffect } from 'react';
import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { ButtonGroup, TextField, Button } from '@mui/material';
import { ko } from 'date-fns/locale'
import DDayCalc from './pages/DDayCalc';

function App() {
  

  return (
    <LocalizationProvider locale={ko} dateAdapter={AdapterDateFns}>
      <div className="App">
        <header>
          <span>디데이 계산기</span>
        </header>
        <DDayCalc />
      </div>
    </LocalizationProvider>
  );
}

export default App;
