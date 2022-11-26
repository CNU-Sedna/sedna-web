import mqtt from "mqtt";
import React, {useState, useEffect,useRef} from 'react';

const websocketUrl = "ws://test.mosquitto.org:8080/mqtt";

function getClient(errorHandler) {
  const client = mqtt.connect(websocketUrl);
  console.log('client ', client)
  client.stream.on("error", (err) => {
    errorHandler(`Connection to ${websocketUrl} failed`);
    client.end();
  });
  return client;
}

const tableHead=["name", "class", "id"];

export default function Test() {

  const client=useRef();
  const [tableData, setTableData]=useState({flag:false, data:''});
 
  useEffect(() => {
  
    client.current=getClient();
    client.current.on('connect', function () {
      client.current.subscribe('/server964', function (err) {
        // if (!err) {
        //   client.current.publish('/hello964', JSON.stringify('select * from student'))
        // }
      })
    })
    client.current.on('message', function (topic, message) {
      console.log(JSON.parse(new TextDecoder("utf-8").decode(message)))
      setTableData({flag:true, data:JSON.parse(new TextDecoder("utf-8").decode(message))});
      
      // client.current.end()
    })
    return () => client.current.end();
    }, []);

    const makeTable=() => {
      // setTableData(prev => ({...prev, flag:false}));
      console.log('tableData.data',tableData.data)
      return(
        <table>
          <thead>
            <tr>
              {tableHead.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {tableData.data.map((items, i) =>{
            var entry =items.map((element,j) => {
              return <td key={j}>{element}</td>
              })
            return (<tr key={i}>{entry} </tr>)
            })};
          </tbody> 
        </table>
      )
    }
    
  return (
    <>
      <button type="button" onClick={() => {client.current.publish('/hello964',JSON.stringify({"msgType":'db', "sql":'select * from student'}))}}>
        Send Message
      </button>
    { tableData.flag? makeTable(): null }
    
    </>
  );
}
