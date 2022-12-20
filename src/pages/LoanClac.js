import { TabsContext } from "@mui/base";
import { Box, Button, MenuItem, Select, Slider, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const LoanCalc = () => {
    const [ principal, setPrincipal ] = useState(10000000);
    const [ rate, setRate ] = useState(2);
    const [ period, setPeriod ] = useState(16);
    const [ way, setWay ] = useState('wonrigum')
    const [ tab, setTab ] = useState(0)
    const [ temp, setTemp ] = useState(0)
    const [ totalIsa, setTotalIsa ] = useState(0)
    const [ isCalc, setIsCalc ] = useState(false)

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }

    function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
      
    const handleChange = (event, newValue ) => {
        setTab(newValue);
    };

    function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

    const reset = () => {
        setPrincipal(0)
        setWay('wonrigum')
        setRate(0)
        setPeriod(0)
        setIsCalc(false)
    }

    const getRate = () => {
        return rate * 0.01/12
    }

    const monthly = (num) => {
        return parseInt((principal * (getRate()* ( Math.pow(1+getRate(),period)))) / (Math.pow(1+getRate(),period) -1 ))
    }

    const getTables = () => {
        let innerHtml = ``

        for(let i=1; i <= period; i++){
            innerHtml += `
                <tr>
                    <td>${i}</td>
                    <td>${numberWithCommas(monthly())}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `
        }

        return innerHtml
    }

    return (
        <div className="App">
            <Header/>
            <div className="main">
                <div className='contents'>
                    <h5 className='title'>대출이자 계산기</h5>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="원리금균등상환" {...a11yProps(0)} />
                            <Tab label="원금균등상환" {...a11yProps(1)} />
                            <Tab label="원금만기일시상환" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={tab} index={0} >
                    <p className="desc">가장 일반적인 방법으로, 원금과 이자를 합한 상환금액이 매달 동일합니다.</p>
                    </TabPanel>
                    <TabPanel value={tab} index={1} >
                    <p className="desc">매달 원금을 동일하게 상환하므로, 이자는 매달 줄어들게 됩니다. 단, 매달 이자가 다르므로 원금과 이자를 합한 상환금액도 매달 달라집니다.</p>
                    </TabPanel>
                    <TabPanel value={tab} index={2} >
                    <p className="desc">대출기간 동안 매달 이자만 상환하고, 대출 만기일에 원금을 일시상환 합니다.</p>
                    </TabPanel>

                    {
                        isCalc ?
                        <table border={1}>
                            <th>대출금</th>
                            <th>대출기간</th>
                            <th>대출금리</th>
                            <tr>
                                <td>{numberWithCommas(principal)}원</td>
                                <td>{period}개월</td>
                                <td>{rate}%</td>
                            </tr>
                            <th>월상환금</th>
                            <th>총 이자액</th>
                            <th>원금 및 총이자액</th>
                            <tr>
                                <td>{numberWithCommas(monthly())}원</td>
                                <td>{period}개월</td>
                                <td>{rate}%</td>
                            </tr>
                        </table> 
                        :
                        null
                    }
                    <div className="form">
                        <TextField id="standard-basic" label="대출금액" variant="standard" fullWidth value={principal} onChange={(val) => setPrincipal(parseInt(val.target.value))} style={{ marginBottom : 8 }}/>
                        <p className="principal">{numberWithCommas(principal)}원</p>
                        <div className="row" style={{ marginTop : 15 }}>
                            {/* <div style={{ marginRight : 10 }}>
                                <p className="title">대출금리</p>
                                <Slider
                                    size="small"
                                    defaultValue={rate}
                                    aria-label="Small"
                                    onChange={(val) => setRate(val)}
                                    step={0.1}
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="auto"
                                    classes={'slider-my'}
                                />
                            </div> */}
                            <TextField id="standard-basic" label="대출금리(%)" variant="standard" value={rate} onChange={(val) => setRate(val.target.value)} fullWidth style={{ marginRight : 30 }}/>
                            <TextField id="standard-basic" label="대출기간(개월)" variant="standard" value={period} onChange={(val) => setPeriod(parseInt(val.target.value))} fullWidth/>
                        </div>
                        <p className="title">상환방법</p>
                        <Select
                            value={way}
                            onChange={(val) => setWay(val.target.value)}
                            fullWidth
                        >
                            <MenuItem value={'wonrigum'}>원리금균등상환</MenuItem>
                            <MenuItem value={'wongum'}>원금균등상환</MenuItem>
                            <MenuItem value={'mangi'}>원금만기일시상환</MenuItem>
                        </Select>
                    </div>
                    <div className="row end">
                        <Button variant='contained' color="error" style={{ marginRight : 16 }} onClick={() => reset()}>초기화</Button>
                        <Button variant='contained' onClick={() => {setIsCalc(true);setTemp(principal)}}>계산하기</Button>
                    </div>
                    {
                        isCalc && way !== 'mangi' ? 
                        <table border={1}>
                            <th>회차</th>
                            <th>상환금</th>
                            <th>납입원금</th>
                            <th>이자</th>
                            <th>납입원금계</th>
                            <th>잔금</th>
                            {
                                [...Array(period).keys()].map((i) => {
                                    return(
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{numberWithCommas(monthly())}원</td>
                                            <td>{numberWithCommas(monthly() - Math.round(temp * getRate()))}원</td>
                                            <td>{numberWithCommas(Math.round(temp * getRate()))}원</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default LoanCalc;