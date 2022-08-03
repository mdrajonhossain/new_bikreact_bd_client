const axios = require('axios').default;


const cat_getdata = async ()=> {
    try {
       let res = await axios({
            url: 'http://screete.bikretabd.com/admin/cata_get_client',
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })                 
        return res.data
    }
    catch (err) {
        console.error("wrong", err);
    }
}




export { cat_getdata };