import { response } from 'express'
import server from '../Server/Server'

const url="/Delete"
fetch(url).then((res)=> response.json)
console.log(response    )