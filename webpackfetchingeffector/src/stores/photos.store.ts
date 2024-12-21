import { createEffect, createStore } from 'effector'
import { IPhoto } from '../model'
import axios from 'axios'


export const fetchPhotosByCount = createEffect('', {
    handler: async(count: number | null) => {
        try {
            const {data} = await axios.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/photos?_limit=${count === null ? 0 : count}`)
            return data
        } catch(e) {
            throw e
        }
        
    }
})

export const $photos = createStore<IPhoto[]>([])
    .on(fetchPhotosByCount.doneData, (_, payload) => {
        return [...payload]
    })
    .on(fetchPhotosByCount.failData, () => {
        return []
    })

