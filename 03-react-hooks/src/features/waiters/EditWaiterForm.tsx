import {WaiterItemInfoI} from "./type";
import React, {useEffect, useState} from "react";

interface EditWaiterFormPropsI {
    waiterToEdit: WaiterItemInfoI
    onWaiterSubmit: (waiter: WaiterItemInfoI) => void;
}

export function EditWaiterForm({ waiterToEdit, onWaiterSubmit } : EditWaiterFormPropsI)
{
    const [firstName, setFirstName] = useState(waiterToEdit.firstName)
    const [phone, setPhone] = useState(waiterToEdit.phone)

    useEffect(() => {
        setFirstName(waiterToEdit.firstName);
        setPhone(waiterToEdit.phone);
    }, [waiterToEdit]);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onWaiterSubmit({
            ...waiterToEdit,
            firstName,
            phone
        })
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