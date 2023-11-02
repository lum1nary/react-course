import { delay } from "../utils";

export class FetchClient {
    url: string
    delay: number = 600

    constructor(url: string) {
        this.url = url
    }

    async request<T, R>(path = '', method = 'GET', data?: T): Promise<R> {
        await delay(this.delay)
        const result = await fetch(`${this.url}${path}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (result.ok)
            return result.json()

        throw new Error(result.statusText);
    }

    async getList<T>(): Promise<T[]> {
        try {
            return await this.request<T, T[]>()
        }
        catch (e: any) {
            throw Error(`Can't get list from server: ${e.message}`)
        }
    }

    async get<T>(id: number): Promise<T> {
        try {
            return await this.request(`/${id}`)
        }
        catch (e: any) {
            throw Error(`Can't get one item from server: ${e.message}`)
        }
    }

    async create<T>(data: T): Promise<T> {
        try {
            return await this.request('', 'POST', data)
        }
        catch (e: any) {
            throw Error(`Can't create item on server: ${e.message}`)
        }
    }

    async update<T>(id: number, data: T): Promise<T> {
        try {
            return await this.request(`/${id}`, 'PUT', data)
        }
        catch (e: any) {
            throw Error(`Can't update item on server: ${e.message}`)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.request(`/${id}`, 'DELETE')
        }
        catch (e: any) {
            throw Error(`Can't delete item on server: ${e.message}`)
        }
    }
}