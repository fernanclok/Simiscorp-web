import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Theme from 'highcharts/themes/dark-blue';
import 'highcharts/modules/solid-gauge';

import axios from 'axios';
import '../fondo.css';
import '../sidebar.css';
import { Button } from "reactstrap";

const IP = "172.18.7.42";

HighchartsMore(Highcharts);
Theme(Highcharts)
const useRealtimeData = (url) => {
  const [realtimeData, setRealtimeData] = useState([]);
  const changeCounterRef = useRef(0); // Use a ref to store the change counter

  const fetchData = async () => {
    try {
      const chartResponse = await axios.get(url);
      const newData = chartResponse.data;
      if (JSON.stringify(newData) !== JSON.stringify(realtimeData)) {
        // Only update the state if there are new data points
        setRealtimeData(newData);
        // Increase the change counter
        changeCounterRef.current += 1;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [url]);

  return realtimeData;
};

const Dashboard = () => {
  const [useUrl2, setUseUrl2] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 
  const url = `http://${IP}:9000/api/valores`;
  const url2 = `http://${IP}:9000/api/valores/5`;

  // Determine which URL to use based on the state value
  const currentUrl = useUrl2 ? url2 : url;

  const realtimeData = useRealtimeData(currentUrl);
  const latestRealtimeData = useRef(realtimeData);
  const lastHGData = realtimeData.length > 0 ? realtimeData[realtimeData.length - 1] : null;
  const [showTemperatureAlert, setShowTemperatureAlert] = useState(false); // Agrega esta línea
  useEffect(() => {
    // Use the latestRealtimeData reference to compare the current and previous data
    if (JSON.stringify(realtimeData) !== JSON.stringify(latestRealtimeData.current)) {
      // Only update the state if there are new data points
      latestRealtimeData.current = realtimeData;
      renderCharts();
    }
    if (lastHGData && lastHGData.T > 25) {
      setShowTemperatureAlert(true);
      setTimeout(() => {
        setShowTemperatureAlert(false);
      }, 5000);
    } else {
      setShowTemperatureAlert(false);
    }
  }, [realtimeData]);


  const renderCharts = () => {
    const reversedRealtimeData = [...realtimeData].reverse();
  const reversedCategories = reversedRealtimeData.map((item) => item.timestamp).reverse();
   
    
    Highcharts.chart('chart1', {
      chart: {
       type: "spline"
      },
      title: {
        text: 'Temperature',
        style: {
          textAlign: 'center',
          color:"#00B2B2"
        }
      },
      subtitle:{
        text: 'This table shows the last value each 5 minutes',
        style: {
          textAlign: 'center',
          color:"#00B2B2"
        }
      },
      xAxis: {
        type: 'category',
        title: {
          text: ''
        },
        labels: {
          formatter: function() {
            const timestamp = this.value;
            const date = new Date(timestamp);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return hours + ':' + minutes + ':' + seconds;
          }
        },
        categories: reversedCategories
      },  
      series: [
        {
          name: 'Sensor Data',
          data: realtimeData.map(item => [item.Node, item.T]),
        },
        {
          name: 'Medida Oficial',
          data: realtimeData.map(item => [item.Node, 4]),
        },
        {
          name: 'Medida Asignada',
          data: realtimeData.map(item => [item.Node, 25]),
        },
      ],
      tooltip: {
        formatter: function () {
          return this.y + ' Grades'; // Agrega el sufijo "units" al valor del punto en el tooltip
        }
      }
    });

    Highcharts.chart('chart2', {
      chart: {
        type: 'spline',
      },
      xAxis: {
        type: 'category',
        title: {
          text: ''
        },
        labels: {
          formatter: function() {
            const timestamp = this.value;
            const date = new Date(timestamp);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return hours + ':' + minutes + ':' + seconds;
          }
        },
        categories: reversedCategories
      },  
      title: {
        text: 'Humidity',
        style: {
          textAlign: 'center',
          color:"#00B2B2"
        }
      },
      subtitle:{
        text: 'This table shows the last value each 5 minutes',
        style: {
          textAlign: 'center',
          color:"#00B2B2"
        }
      },
      series: [{
        name:"Humedad",
        data: realtimeData.map(item => [item.Node, item.RH])
      }],
    });
/* --------------------------------3-------------------------------------------------------------- */
    Highcharts.chart('container', {
      chart: {
          type: 'gauge',
          backgroundColor: 'transparent',
          plotBorderWidth: 0,
          plotBorderColor: 'transparent' ,
          border:"none",
          borderWidth: 0 
      },
      
      title: {
          text: 'Air quality',
          style: {
            fontSize: '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            color:"#00B2B2"
          }
      },
      subtitle:{
        text: 'This table shows the last value each 5 minutes',
        style: {
          textAlign: 'center',
          color:"#00B2B2"
        }
      },
      
      pane: {
          startAngle: -180,
          endAngle: 180,
          background: [{
              backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                      [0, '#FFF'],
                      [1, '#333']
                  ]
              },
              borderWidth: 0,
              outerRadius: '109%'
          }, {
              backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                      [0, '#333'],
                      [1, '#FFF']
                  ]
              },
              borderWidth: 1,
              outerRadius: '107%'
          }, {
              // default background
          }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
          }]
      },
      
      // El valor máximo del gauge chart
      yAxis: {
          min: 0,
          max: 5000,
          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',
      
          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
              step: 2,
              rotation: 'auto'
          },
          title: {
              text: 'ppm'
          },
          plotBands: [{
              from: 0,
              to: 2000,
              color: '#55BF3B' // green
          }, {
              from: 2001,
              to: 2400,
              color: '#DDDF0D' // yellow
          }, {
              from: 2401,
              to: 5000,
              color: '#DF5353' // red
          }]
      },
      
      series: [{
          name: 'PPM',
          data: lastHGData ? [[lastHGData.Node, lastHGData.HG]] : [],
          tooltip: {
              valueSuffix: ''
          }
      }]
  });
  }; 

  // Function to toggle between the two URLs
  const handleToggle = () => {
    setUseUrl2(prevState => !prevState);
  };
    const getLastData = (data, metric) => {
      const lastData = data[data.length - 1];
      return lastData ? lastData[metric] : null;
    }
  return (
    <>
     {showTemperatureAlert && (
        <div className="al alert alert-warning" role="alert">
          The temperature has exceeded 25 degrees.<br />
                  Activating cooling.
        </div>
      )}
    <div class="container text-center">
        <div className="card  cards" style={{ width: "18rem" }}>
          <h1 style={{ textAlign: "center", alignContent: "center", fontSize: "30px", marginTop: "10%" }}>
            {getLastData(realtimeData, "T")}&deg;
          </h1>
          <div class="card-body">
            <p class="card-text">Show last value registered of Temperature.</p>
          </div>
        </div>
        <div className="card  cards" style={{ width: "18rem" }}>
          <h1 style={{ textAlign: "center", alignContent: "center", fontSize: "30px", marginTop: "10%" }}>
            {getLastData(realtimeData, "RH")}%
          </h1>
          <div class="card-body">
            <p class="card-text">Show last percentage registered of Relative Humidity.</p>
          </div>
        </div>
        <div className="card  cards" style={{ width: "18rem" }}>
          <h1 style={{ textAlign: "center", alignContent: "center", fontSize: "28px", marginTop: "5%" }}>
            {getLastData(realtimeData, "HG")} ppm
          </h1>
          <div class="card-body">
            <p class="card-text">Show last unitis of CO2 registered</p>
          </div>
        </div>
      </div>
    <div className='graficas'>
      <Button onClick={handleToggle} color="btn btn-outline-info">Show the last 5 minutes</Button>
      <div className='chart-container' id="chart1"></div>
      <div className='chart-container' id="chart2"></div>
      <div className='chart-container' id="container"></div>
    </div>
 
</>
  );
};

export default Dashboard;
