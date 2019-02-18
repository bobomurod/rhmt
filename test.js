const axios = require("axios");
const url = "http://go.btc.uz:9994/holders";
/////////////////////////   GET HOLDERS     ///////////////////////////////////
const getHolders = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
var g = 1;
for(i=0; i != 1; i++){
getHolders(url).then(()=>{console.log(g++)});
}

/////////////////////////   GET LEVEL BY MBSID    ///////////////////////////////////

const getLevelByMbsid = async url => {
    try {
        const response = await axios.post(url, {
            mbsid: '777'
        });
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};



getLevelByMbsid('http://go.btc.uz:9994/levels/getLevelByMBSID')

/////////////////////////   GET LEVEL BY MSISDN    ///////////////////////////////////

const getLevelByMsisdn = async url => {
    try {
        const response = await axios.post(url, {
            wallet: '998994955409'
        });
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getLevelByMsisdn('http://go.btc.uz:9994/levels/getLevelByMSISDN')