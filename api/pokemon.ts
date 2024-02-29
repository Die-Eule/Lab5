import api from "./axiosClient";
import { createEffect } from "effector";

export const getPokemonFX = createEffect(async (id: number) => {
    try {
        const response = await api.get("pokemon/" + id);
        return response.data;
    } catch(error) {
        throw error;
    }
});
