import {WaiterList} from "./WaiterList";
import {EditWaiterForm} from "./EditWaiterForm";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../NotFound";

export function WaitersApp () {

    return (
        <Routes>
            <Route path='/' element={<WaiterList/>} />
            <Route path='/create' element={<EditWaiterForm/>} />
            <Route path='/edit/:id' element={<EditWaiterForm/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}