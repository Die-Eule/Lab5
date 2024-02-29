import api from "./axiosClient";
import { createEffect } from "effector";

export const getSpeciesFX = createEffect(async (id: number) => {
    try {
        const response = await api.get("pokemon-species/" + id);
        return response.data;
    } catch(error) {
        throw error;
    }
});