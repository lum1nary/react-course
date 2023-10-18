import {WaiterItemInfoI} from "../type";
import {FetchClient} from "../../../api/FetchClient";

export class WaitersApi {

    client: FetchClient

    constructor(client: FetchClient) {
        this.client = client;
    }

    getList() : Promise<WaiterItemInfoI[]> {
        return this.client.getList<WaiterItemInfoI>();
    }

    create(item: WaiterItemInfoI) : Promise<WaiterItemInfoI> {
        return this.client.create(item);
    }

    update(item: WaiterItemInfoI) : Promise<WaiterItemInfoI> {
        return this.client.update(item.id!, item);
    }

    delete(id: number): Promise<void> {
        return this.client.delete(id);
    }
}