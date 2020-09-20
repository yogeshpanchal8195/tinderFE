import axios from 'axios'

const inst=axios.create({
  baseURL:"http://localhost:8000"
})

export default inst;