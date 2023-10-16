import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveItem} from "./store/thunk";

export function EditWaiterForm()
{
    const dispatch = useDispatch();
    const waiterToEdit = useSelector((state: any) => state.waiters.waiterToEdit);
    const [firstName, setFirstName] = useState(waiterToEdit.firstName)
    const [phone, setPhone] = useState(waiterToEdit.phone)

    useEffect(() => {
        setFirstName(waiterToEdit.firstName);
        setPhone(waiterToEdit.phone);
    }, [waiterToEdit]);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newWaiter = {
            ...waiterToEdit,
            firstName,
            phone
        };

        // @ts-ignore
        dispatch(saveItem(newWaiter))
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="name">First name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" id="name" />
            </div>

            <div>
                <label htmlFor="pnumber">Phone number</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" id="pnumber"
                       placeholder="XXX-XXX-XX-XX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}