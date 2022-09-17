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



const subcat_getdata = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/subcat_getclient')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}


const slider = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/slider_get_client')
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



const additems_data = async (event) => {

    try {
        var itemfile
        const itemsdta = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: event })
        };
        await fetch('http://screete.bikretabd.com/admin/item_client', itemsdta)
            .then(response => response.json())
            .then((res) => {
                itemfile = res;
            });
        return itemfile;
    }
    catch (err) {
        console.log(err);
    }
}




const add_card_items_local_data = async () => {
    try {
        var add_items = await JSON.parse(localStorage.getItem("add_items") || "[]");
        return add_items;
    }
    catch (err) {
        console.log(err);
    }
}





const single_items = async (event) => {

    try {
        var itemfile
        const itemsdta = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: event })
        };
        await fetch('http://screete.bikretabd.com/admin/signle_item_get_client', itemsdta)
            .then(response => response.json())
            .then((res) => {
                itemfile = res;
            });
        return itemfile;
    }
    catch (err) {
        console.log(err);
    }
}


const searchitmes = async (event) => {

    try {
        var searchdata
        const itemsdta = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items_name: event })
        };
        await fetch('http://screete.bikretabd.com/admin/search_items', itemsdta)
            .then(response => response.json())
            .then((res) => {
                searchdata = res;
            });
        return searchdata;
    }
    catch (err) {
        console.log(err);
    }
}



const client_regi = async (event) => {

    try {
        var regi_data
        const clientregis = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        };
        await fetch('http://screete.bikretabd.com/admin/client_regi', clientregis)
            .then(response => response.json())
            .then((res) => {
                regi_data = res;
            });
        return regi_data;
    }
    catch (err) {
        console.log(err);
    }
}



const client_login = async (event) => {

    try {
        var log_data
        const clientlog = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        };
        await fetch('http://screete.bikretabd.com/admin/client_login', clientlog)
            .then(response => response.json())
            .then((res) => {
                log_data = res;
            });
        return log_data;
    }
    catch (err) {
        console.log(err);
    }
}




const get_user_location = async () => {
    try {
        const res = await axios.get('https://api.db-ip.com/v2/free/self')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}


const items_get = async () => {
    try {
        const res = await axios.get('http://screete.bikretabd.com/admin/item_get_client')
        return res.data;
    }
    catch (err) {
        console.error("wrong", err);
    }
}





export {
    cat_getdata,
    subcat_getdata,
    sub_cat_data,
    additems_data,
    add_card_items_local_data,
    single_items,
    searchitmes,
    client_regi,
    client_login,
    get_user_location,
    slider,
    items_get
};





