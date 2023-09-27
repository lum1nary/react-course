import {WaiterItemInfo} from "../type";

const URL = 'http://localhost:4000/waiters';

export class WaitersApi {
    static getList() : Promise<WaiterItemInfo[]> {
        return fetch(URL).then(r => r.json())
    }

    static create(itemInfo : WaiterItemInfo) : Promise<WaiterItemInfo> {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(itemInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }
}