export class FetchClient {
    url: string

    constructor(url: string) {
        this.url = url
    }

    request<T, R>(path = '', method = 'GET', data?: T): Promise<R> {
        return fetch(`${this.url}${path}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }

    getList<T>(): Promise<T[]> {
        return this.request<T, T[]>()
    }

    create<T>(data: T): Promise<T> {
        return this.request('', 'POST', data)
    }

    update<T>(id: number, data: T): Promise<T> {
        return this.request(`/${id}`, 'PUT', data)
    }

    delete(id: number): Promise<void> {
        return this.request(`/${id}`, 'DELETE')
    }
}