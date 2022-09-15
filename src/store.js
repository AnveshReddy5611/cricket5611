import {configureStore} from "@reduxjs/toolkit"
import Randomreducer from "./randomslice"
export default configureStore({
    reducer:{
        Random:Randomreducer,
    },
})