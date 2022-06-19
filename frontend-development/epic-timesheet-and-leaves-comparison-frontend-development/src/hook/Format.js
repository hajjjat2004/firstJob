import axios from 'axios';
async function Format (payload,setBtn,which,setfileData) {
    const data = new FormData();
    data.append(`file`, payload.files[0]);
   
    let form = await axios.post(`http://192.168.32.134:3010?name=${which}`, data);
    let formData = form.data;
    setfileData({name:payload.files[0].name,arr:formData.sheetNames,rowL:formData.rowL})
        payload.value = null
        setBtn(true)
    
}

export default Format;
