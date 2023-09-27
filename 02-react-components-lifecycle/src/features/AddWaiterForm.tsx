import {WaiterItemInfo} from "./type";
import React, {useState} from "react";

interface AddWaiterFormProps {
    onWaiterAddSubmit: (waiter: WaiterItemInfo) => void;
}

export function AddWaiterForm({ onWaiterAddSubmit } : AddWaiterFormProps)
{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onWaiterAddSubmit({firstName: name, phone: phone})
        setName('')
        setPhone('')
    }

    return (
    <form onSubmit={onFormSubmit}>
        <div>
            <label htmlFor="name">First name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" />
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