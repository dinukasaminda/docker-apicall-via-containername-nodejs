const express = require('express')
const axios = require("axios").default;
const app = express()
const port = 4580

app.get('/test2node2', (req, res) => {
    console.log('NODE2 LOG:Hello World!');
    res.json({status:true,app:"node2"});
})

app.listen(port, () => {
  console.log(`LOG Node2 :app listening at http://localhost:${port}`)
})


setTimeout(()=>{
    setInterval(()=>{pageContent();},2000);
},1000);

const pageContent = async () => {
    try {
      const response = await axios.get("http://node1:4560/test1node1");
    console.log("LOG NODE2",response.data);
    } catch (err) {
        console.error("Error from Node1")
      console.error(""+err);
    }
  };