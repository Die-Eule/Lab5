import { getTypeListFX } from "@/api/typeList";
import { createEvent, createStore } from "effector";

export const $typesStore = createStore([]);
export const setPendingTyp = createEvent();

$typesStore.on(setPendingTyp, () => [{id: 0, name: "?"}]);
$typesStore.on(
    getTypeListFX.doneData, (_, types) => types.map(
        (item: {name:string, url:string}) => {
            return {
                id: Number(new URL(item.url).pathname.split('/').findLast((element) => element)),
                name: item.name,
                url: item.url,
            };
        }));