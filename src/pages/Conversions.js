import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../App.css';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Tab, Tabs, Typography } from "@mui/material";

const lengthUnits = ['mm','cm','m','km','in','ft','yd','mile']
const lengthKo = ['밀리미터','센티미터','미터','킬로미터','인치','피트','야드','마일']

const Conversion = () => {
    const [ first, setFirst] = useState('mm');
    const [ second, setSecond ] = useState('cm')
    const [ value, setValue ] = useState(0)
    const [ tab, setTab ] = useState(0);

    useEffect(() => {
        document.title = '단위 변환기'
    },[])

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

    function lengthConverter(source,valNum) {
        valNum = parseFloat(valNum);
        var inputFeet = document.getElementById("inputFeet");
        var inputMeters = document.getElementById("inputMeters");
        var inputInches = document.getElementById("inputInches");
        var inputcm = document.getElementById("inputcm");
        var inputYards = document.getElementById("inputYards");
        var inputKilometers = document.getElementById("inputKilometers");
        var inputMiles = document.getElementById("inputMiles");
        if (source=="inputFeet") {
          inputMeters.value=(valNum/3.2808).toFixed(2);
          inputInches.value=(valNum*12).toFixed(2);
          inputcm.value=(valNum/0.032808).toFixed();
          inputYards.value=(valNum*0.33333).toFixed(2);
          inputKilometers.value=(valNum/3280.8).toFixed(5);    
          inputMiles.value=(valNum*0.00018939).toFixed(5);
        }
        if (source=="inputMeters") {
          inputFeet.value=(valNum*3.2808).toFixed(2);
          inputInches.value=(valNum*39.370).toFixed(2);
          inputcm.value=(valNum/0.01).toFixed();
          inputYards.value=(valNum*1.0936).toFixed(2);
          inputKilometers.value=(valNum/1000).toFixed(5);    
          inputMiles.value=(valNum*0.00062137).toFixed(5);
        }
        if (source=="inputInches") {
          inputFeet.value=(valNum*0.083333).toFixed(3);
          inputMeters.value=(valNum/39.370).toFixed(3);
          inputcm.value=(valNum/0.39370).toFixed(2);
          inputYards.value=(valNum*0.027778).toFixed(3);    
          inputKilometers.value=(valNum/39370).toFixed(6);
          inputMiles.value=(valNum*0.000015783).toFixed(6);
        }
        if (source=="inputcm") {
          inputFeet.value=(valNum*0.032808).toFixed(3);
          inputMeters.value=(valNum/100).toFixed(3);
          inputInches.value=(valNum*0.39370).toFixed(2);
          inputYards.value=(valNum*0.010936).toFixed(3);    
          inputKilometers.value=(valNum/100000).toFixed(6);
          inputMiles.value=(valNum*0.0000062137).toFixed(6);
        }
        if (source=="inputYards") {
          inputFeet.value=(valNum*3).toFixed();
          inputMeters.value=(valNum/1.0936).toFixed(2);
          inputInches.value=(valNum*36).toFixed();
          inputcm.value=(valNum/0.010936).toFixed();
          inputKilometers.value=(valNum/1093.6).toFixed(5);
          inputMiles.value=(valNum*0.00056818).toFixed(5);
        }
        if (source=="inputKilometers") {
          inputFeet.value=(valNum*3280.8).toFixed();
          inputMeters.value=(valNum*1000).toFixed();
          inputInches.value=(valNum*39370).toFixed();
          inputcm.value=(valNum*100000).toFixed();
          inputYards.value=(valNum*1093.6).toFixed();
          inputMiles.value=(valNum*0.62137).toFixed(2);    
        }
        if (source=="inputMiles") {
          inputFeet.value=(valNum*5280).toFixed();
          inputMeters.value=(valNum/0.00062137).toFixed();
          inputInches.value=(valNum*63360).toFixed();
          inputcm.value=(valNum/0.0000062137).toFixed();
          inputYards.value=(valNum*1760).toFixed();
          inputKilometers.value=(valNum/0.62137).toFixed(2);    
        }
    }

    function weightConverter(source,valNum) {
        valNum = parseFloat(valNum);
        var inputPounds = document.getElementById("inputPounds");
        var inputKilograms = document.getElementById("inputKilograms");
        var inputOunces = document.getElementById("inputOunces");
        var inputGrams = document.getElementById("inputGrams");
        var inputStones = document.getElementById("inputStones");
        if (source=="inputPounds") {
          inputKilograms.value=(valNum/2.2046).toFixed(2);
          inputOunces.value=(valNum*16).toFixed(2);
          inputGrams.value=(valNum/0.0022046).toFixed();
          inputStones.value=(valNum*0.071429).toFixed(3);
        }
        if (source=="inputKilograms") {
          inputPounds.value=(valNum*2.2046).toFixed(2);
          inputOunces.value=(valNum*35.274).toFixed(2);
          inputGrams.value=(valNum*1000).toFixed();
          inputStones.value=(valNum*0.1574).toFixed(3);
        }
        if (source=="inputOunces") {
          inputPounds.value=(valNum*0.062500).toFixed(4);
          inputKilograms.value=(valNum/35.274).toFixed(4);
          inputGrams.value=(valNum/0.035274).toFixed(1);
          inputStones.value=(valNum*0.0044643).toFixed(4);
        }
        if (source=="inputGrams") {
          inputPounds.value=(valNum*0.0022046).toFixed(4);
          inputKilograms.value=(valNum/1000).toFixed(4);
          inputOunces.value=(valNum*0.035274).toFixed(3);
          inputStones.value=(valNum*0.00015747).toFixed(5);
        }
        if (source=="inputStones") {
          inputPounds.value=(valNum*14).toFixed(1);
          inputKilograms.value=(valNum/0.15747).toFixed(1);
          inputOunces.value=(valNum*224).toFixed();
          inputGrams.value=(valNum/0.00015747).toFixed();
        }
    }

    function temperatureConverter(source,valNum) {
        valNum = parseFloat(valNum);
        var inputFahrenheit = document.getElementById("inputFahrenheit");
        var inputCelsius = document.getElementById("inputCelsius");
        var inputKelvin = document.getElementById("inputKelvin");
        if (source=="inputFahrenheit") {
          inputCelsius.value=((valNum-32)/1.8).toFixed(2);
          inputKelvin.value=(((valNum-32)/1.8)+273.15).toFixed(2);
        }
        if (source=="inputCelsius") {
          inputFahrenheit.value=((valNum*1.8)+32).toFixed(2);
          inputKelvin.value=((valNum)+273.15).toFixed(2);
        }
        if (source=="inputKelvin") {
          inputFahrenheit.value=(((valNum-273.15)*1.8)+32).toFixed(2);
          inputCelsius.value=((valNum)-273.15).toFixed(2);
        }
      }

    return (
        <div className="App">
            <Header />
            <div className="main">
                <div className='contents'>
                    <h5 className='title'>단위 변환기</h5>
                    <div classname="form">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="길이" {...a11yProps(0)} />
                                <Tab label="무게" {...a11yProps(1)} />
                                <Tab label="온도" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={tab} index={0} >
                            <p className="title">길이 변환기</p>
                            <div class="form">
                                <p className="alert">기준이 되는 단위에 숫자를 입력하면 나머지 단위가 자동으로 계산되어 나타납니다.</p>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>피트(Feet)</label>
                                        <input id="inputFeet" class="w3-input w3-border" type="number" placeholder="Feet" onInput={(val) => lengthConverter('inputFeet',val.target.value)}/>
                                    </div>
                                    <div class="input-row">
                                        <label>미터(Meters)</label>
                                        <input id="inputMeters" class="w3-input w3-border" type="number" placeholder="Meters" onInput={(val) => lengthConverter('inputMeters',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>인치(Inches)</label>
                                        <input id="inputInches" class="w3-input w3-border" type="number" placeholder="Inches" onInput={(val) => lengthConverter('inputInches',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                    <div class="input-row">
                                        <label>센티미터(cm)</label>
                                        <input id="inputcm" class="w3-input w3-border" type="number" placeholder="cm" onInput={(val) => lengthConverter('inputcm',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>야드(Yards)</label>
                                        <input id="inputYards" class="w3-input w3-border" type="number" placeholder="Yards" onInput={(val) => lengthConverter('inputYards',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                    <div class="input-row">
                                        <label>킬로미터(Kilometers)</label>
                                        <input id="inputKilometers" class="w3-input w3-border" type="number" placeholder="Kilometers" onInput={(val) => lengthConverter('inputKilometers',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>마일(Miles)</label>
                                        <input id="inputMiles" class="w3-input w3-border" type="number" placeholder="Miles" onInput={(val) => lengthConverter('inputMiles',val.target.value)} onchange="lengthConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={tab} index={1} >
                            <p className="title">무게 변환기</p>
                            <div class="form">
                            <p className="alert">기준이 되는 단위에 숫자를 입력하면 나머지 단위가 자동으로 계산되어 나타납니다.</p>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>파운드(Pounds)</label>
                                        <input id="inputPounds" class="w3-input w3-border" type="number" placeholder="Pounds" onInput={(val) => weightConverter('inputPounds',val.target.value)} onchange="weightConverter(this.id,this.value)"/>
                                    </div>
                                    
                                    <div class="input-row">
                                        <label>킬로그램(Kilograms)</label>
                                        <input id="inputKilograms" class="w3-input w3-border" type="number" placeholder="Kilograms" onInput={(val) => weightConverter('inputKilograms',val.target.value)} onchange="weightConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>온스(Ounces)</label>
                                        <input id="inputOunces" class="w3-input w3-border" type="number" placeholder="Ounces" onInput={(val) => weightConverter('inputOunces',val.target.value)} onchange="weightConverter(this.id,this.value)"/>
                                    </div>
                                    <div class="input-row">
                                        <label>그램(Grams)</label>
                                        <input id="inputGrams" class="w3-input w3-border" type="number" placeholder="Grams" onInput={(val) => weightConverter('inputGrams',val.target.value)} onchange="weightConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>스톤(Stones)</label>
                                        <input id="inputStones" class="w3-input w3-border" type="number" placeholder="Stones" onInput={(val) => weightConverter('inputStones',val.target.value)} onchange="weightConverter(this.id,this.value)"/>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={tab} index={2} >
                            <p className="title">온도 변환기</p>
                            <div class="form">
                                <p className="alert">기준이 되는 단위에 숫자를 입력하면 나머지 단위가 자동으로 계산되어 나타납니다.</p>
                                
                                
                                <div className="row between">
                                    <div class="input-row">
                                        <label>화씨(Fahrenheit)</label>
                                        <input id="inputFahrenheit" class="w3-input w3-border" type="number" min="-459.66999999999996" placeholder="Fahrenheit" onInput={(val) => temperatureConverter('inputFahrenheit',val.target.value)}/>
                                    </div>
                                    <div class="input-row">
                                        <label>섭씨(Celsius)</label>
                                        <input id="inputCelsius" class="w3-input w3-border" type="number" min="-273.15" placeholder="Celsius" onInput={(val) => temperatureConverter('inputCelsius',val.target.value)}/>
                                    </div>
                                </div>
                                <div className="row between">
                                    <div class="input-row">
                                        <label>켈빈(Kelvin)</label>
                                        <input id="inputKelvin" class="w3-input w3-border" type="number" min="0" placeholder="Kelvin" onInput={(val) => temperatureConverter('inputKelvin',val.target.value)}/>
                                    </div>
                                </div>
                            </div>                        
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversion;