import { writable, type Writable } from 'svelte/store';

const array = <T>(): T[] => [];
const record = <K extends string | number | symbol, V>(): Record<K, V> => ({} as Record<K, V>);

type ExtractStoreType<T> = T extends Writable<infer S> ? S : never;

export const storable = <T>(key: string, data: T): Writable<T> => {
    const store = writable(data);

    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(key);

        if (stored != null) {
            store.set(JSON.parse(stored));
        }
    }

    localStorage.storable &&
        store.set(JSON.parse(localStorage.storable));

    return {
        subscribe: store.subscribe,
        set: data => {
            localStorage.setItem(key, JSON.stringify(data));
            store.set(data);
        },
        update: cb => {
            store.update(state => {
                localStorage.setItem(key, JSON.stringify(cb(state)));
                return cb(state);
            });
        },
    };
};

export type UUID = string;
export type PageResult = {
    uuid: UUID,
    url: string,
    date: string,
    timestamp: number,
    content: string,
    starred: boolean,
};

export type Store = ExtractStoreType<typeof store>;

export const store = storable('llmirage', {
    version: 1,
    OPENAI_API_KEY: '',
    cache: record<UUID, PageResult>(),
    history: array<UUID>(),
    historyIndex: 0,
    darkMode: false,
    temperature: 0.6,
    specificationMode: false,
});
