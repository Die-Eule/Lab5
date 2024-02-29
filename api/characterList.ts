import api from "./axiosClient";
import { createEffect } from "effector";

export const getCharacterListFX = createEffect(async (range: {offset: number, limit: number}) => {
    try {
        const response = await api.get("pokemon?offset=" + range.offset + "&limit=" + range.limit);
        return response.data.results;
    } catch(error) {
        throw error;
    }
});
