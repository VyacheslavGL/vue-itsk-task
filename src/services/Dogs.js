import axios from 'axios';


const entry = 'https://dog.ceo/api/breeds/list/all';


const apiRequest = async function () {
    const respons = await axios(entry);
    if (respons.status === 200 && respons.data.status === "success") {
        console.log('respons - ', respons.data.message);
        return respons.data.message;
    } else {
        throw new Error('Сервер не доступен')
    }
};

export default {
    async getAllBreeds() {
        const obj = await apiRequest();
        let newArr = [];
        let id = 1;
        let inid = 1;
        for (let key in obj) {
            newArr.push({name: key, id: id++, items: [{name: id + key, id: `${inid++}.1`}]});
        }

        return newArr;
    },

}