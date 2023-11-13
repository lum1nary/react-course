export function guessBoolean(value: any): boolean {
    if (typeof value === 'boolean') {
        return value;
    }

    if (value === null || value === undefined) {
        return false;
    }

    if (typeof value === 'string') {
        return ['true', 'yes', '1'].includes(value.trim().toLowerCase());
    }

    if (Array.isArray(value) && !value.length) {
        return false;
    }

    if (typeof value === 'object' && !Object.keys(value).length) {
        return false;
    }

    return Boolean(value);
}