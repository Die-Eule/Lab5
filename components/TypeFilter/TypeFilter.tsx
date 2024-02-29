import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { getTypeListFX } from "@/api/typeList";
import { $typesStore, setPendingTyp } from "@/store/typesStore";

const TypeFilter = () => {
    const [typesStore, loading] = useUnit([$typesStore, getTypeListFX.pending]);


    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    useEffect(() => {
        if (typesStore.length === 0) {
            setPendingTyp();
            getTypeListFX();
        }
    }, []);

    return (
        <Dropdown classNames={{content:"min-w-[135px]"}} >
            <DropdownTrigger>
                <Button
                    size="sm"
                    radius="sm"
                    fullWidth="true"
                    variant="bordered"
                    className="capitalize"
                >
                    Type
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Pokemon types"
                variant="solid"
                closeOnSelect={false}
                disallowEmptySelection={false}
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                items={typesStore}
            >
                {(item) => (
                    <DropdownItem key={item.id} >
                        {item.name}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}

export default TypeFilter;
