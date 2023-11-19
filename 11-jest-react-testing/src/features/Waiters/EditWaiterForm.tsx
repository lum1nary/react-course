import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWaiterToEdit, saveItem} from "./store/thunk";
import {useParams, useNavigate} from "react-router-dom";
import {waiterToEditSelector} from "./store/selectors";
import {Page} from "../../components/Page";
import {actions, EMPTY_WAITER} from "./store/reducer";

export function EditWaiterForm()
{
    let { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {waiterToEdit, waiterToEditLoading, waiterToEditLoadingError} = useSelector(waiterToEditSelector)
    const [firstName, setFirstName] = useState(waiterToEdit.firstName)
    const [phone, setPhone] = useState(waiterToEdit.phone)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (id)
        {
            // @ts-ignore
            dispatch(getWaiterToEdit(id));
        }
        else {
            dispatch(actions.setWaiterToEditAction(EMPTY_WAITER))
        }
    }, [id]);


    useEffect(() => {
        setFirstName(waiterToEdit.firstName);
        setPhone(waiterToEdit.phone);
    }, [waiterToEdit]);

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newWaiter = {
            ...waiterToEdit,
            firstName,
            phone
        };
        setError('')
        setLoading(true)

        try {
            // @ts-ignore
            await dispatch(saveItem(newWaiter))
            navigate('/waiters')
        }
        catch (e: any)
        {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Page title='Edit Form' loading={waiterToEditLoading} error={waiterToEditLoadingError}>
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
                <button type="submit" disabled={loading} >Submit</button>

            </form>
            {loading && <span style={{ color: 'blue'}}>Saving changes...</span>}
            {error && <div style={{color: 'red'}}>{error}</div>}
        </Page>
    )
}