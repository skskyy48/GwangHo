import React, { useEffect } from "react";
import moment from "moment";
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { ButtonGroup, TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ko } from 'date-fns/locale'
import '../App.css';
import Header from "../components/Header";
import { GoogleAdvertise } from "../components/GoogleAdvertise";

const DDayCalc = () => {
    const [ standard, setStandard ] = React.useState('today')
    const [ startDate, setStartDate ] = React.useState(new Date());
    const [ endDate, setEndDate ] = React.useState(new Date());
    const [ duration, setDuration ] = React.useState(0);

    useEffect(() => {
        let dur = moment.duration(moment(endDate).diff(moment(startDate))).asDays();
        setDuration(parseInt(dur))
    },[startDate])

    useEffect(() => {
        let dur = moment.duration(moment(endDate).diff(moment(startDate))).asDays();
        setDuration(parseInt(dur))
    },[endDate])

    return (
        <LocalizationProvider locale={ko} dateAdapter={AdapterDateFns}>
            <div className="App">
                <Header />
                <GoogleAdvertise
                client="ca-pub-7735668451615080"
                slot="5999780999"
                format="auto"
                responsive="true"
                layoutKey="-fz+6a+19-cg+hh"
            />
                <div className='main'>
                    <div className='contents'>
                        <h5 className='title'>디데이 계산기</h5>
                        <ButtonGroup size={'large'}>
                        <Button style={{ 
                            backgroundColor : standard === 'today' ? '#1976d2' : 'white',
                            color :  standard === 'today' ? 'white' : '#1976d2'
                        }} onClick={() => {setStartDate(new Date());setStandard('today')}}>오늘 날짜를 기준일으로</Button>
                        <Button
                        style={{ 
                            backgroundColor : standard === 'day' ? '#1976d2' : 'white',
                            color :  standard === 'day' ? 'white' : '#1976d2'
                        }} 
                        onClick={() => setStandard('day')}>기준일 선택</Button>
                        </ButtonGroup>
                        <div style={{ marginTop : 28, marginBottom : 12 }}>
                        {
                            standard === 'day' ?
                            <DatePicker
                                label='기준일 선택'
                                value={startDate}
                                onChange={(value) => setStartDate(value)}
                                renderInput={(params) => <TextField {...params} />}                    /> : null
                        }
                        </div>
                        <p className='time'>
                        {
                            duration > 0 ?
                            `기준일부터 ${duration}일 후 입니다.`
                            :
                            `기준일부터 ${-duration}일 지났습니다.` 
                        }
                        </p>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            showToolbar
                            orientation='landscape'
                            openTo='day'
                            value={endDate}
                            inputFormat={"yyyy-MM-dd"}
                            mask={"____-__-__"}
                            toolbarTitle='선택한 날짜'
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default DDayCalc