import React from 'react'
import '../node_modules/react-vis/dist/style.css'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis'

const Chart = ({ coins }) => {

    const makeVolArray = (coin) => {
        let volArray = []
        Object.entries(coin).forEach((item, i) => {
            if (i === 0) {
                return
            }
            else if (i === 1) {
                return
            }
            else if (i > 29) {
                return
            }          
            else {
                volArray.push({x:-i, y: item[1]})
            }
        })
        return volArray.reverse()
    }

    const setColor = (i) => {
        switch (i) {
            case 0: return "blue"
            case 1: return "red"
            case 2: return "yellow"
            case 3: return "green"
            case 4: return "purple"
            default: return "black"
        }
    }
  
    if (coins[0]) {
        return (
           <div>
               <XYPlot
                    xType="ordinal"
                    width={1000}
                    height={500}>
                 
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    {
                        coins.map((coin, i) => {

                            return (
                                <LineSeries 
                                    key = {i}                   
                                    color= {setColor(i)}
                                    data= {makeVolArray(coin)}                                    
                                />
                            )
                        })
                    }
                   
                </XYPlot>
            </div>
        )
    }

    return (
        
        <div>
            Loading
        </div>
        
    )
}

export default Chart

