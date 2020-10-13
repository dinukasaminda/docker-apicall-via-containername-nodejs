const express = require('express')
const axios = require("axios").default;
const app = express();
const port = 4560

app.get('/test1node1', (req, res) => {
    console.log('NODE1 LOG:Hello World!');
    res.json({status:true,app:"node21"});
});

app.listen(port, () => {
  console.log(`LOG Node1 :app listening at http://localhost:${port}`)
});

setTimeout(()=>{
    setInterval(()=>{pageContent();},2000);
},1000);

const pageContent = async () => {
    try {
      const response = await axios.get("http://node2:4580/test2node2");
    console.log("LOG NODE1",response.data);

    } catch (err) {

        console.error("Error from Node1")
      console.error(""+err);
    }
  };