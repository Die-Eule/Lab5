import api from "./axiosClient";
import { createEffect } from "effector";

export const getTypeListFX = createEffect(async () => {
    try {
        const response = await api.get("type?limit=50&offset=0");
        return response.data.results;
    } catch(error) {
        throw error;
    }
});