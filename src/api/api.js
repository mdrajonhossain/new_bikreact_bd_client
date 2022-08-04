const axios = require('axios').default;


const cat_getdata = async ()=> {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/cata_get_client')
        return res.data;        
    }
    catch (err) {
        console.error("wrong", err);
    }
}




export { cat_getdata };