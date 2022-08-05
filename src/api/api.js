const axios = require('axios').default;


const cat_getdata = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/cata_get_client')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}




const sub_cat_data = async (e) => {
    try {
        var dx
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: e })
        };
        await fetch('http://screete.bikretabd.com/admin/sub_cata_sub_id_client', requestOptions)
            .then(response => response.json())
            .then((res) => {
                dx = res;
            });

        return dx;
    }
    catch (err) {
        console.log(err);
    }
}




export { cat_getdata, sub_cat_data };





