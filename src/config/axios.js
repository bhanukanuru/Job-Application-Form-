import Axios from 'axios'

const axios=Axios.create({
    baseURL:'http://cors-anywhere.herokuapp.com/dct-application-form.herokuapp.com'
})

export default axios