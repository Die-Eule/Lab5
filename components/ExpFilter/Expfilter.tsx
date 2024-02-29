import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";

const ExpFilter = ({name}: {name: string}) => {
  return (
    <Popover placement="bottom"  classNames={{content:"items-end"}}>
      <PopoverTrigger>
        <Button
            size="sm"
            radius="sm"
            fullWidth="true"
            variant="bordered"
            className="capitalize"
        >{name}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 max-w-[200px] flex gap-4 ">
            <Input
                classNames={{label:"ps-2 font-bold"}}
                type="number"
                label="From"
                placeholder="from"
                labelPlacement="outside"
                radius="sm"
                size="sm"
            />
            <Input
                classNames={{label:"ps-2 font-bold"}}
                type="number"
                label="To"
                placeholder="to"
                labelPlacement="outside"
                radius="sm"
                size="sm"
            />
        </div>
        <Button size="sm" radius="full" color="success">Apply</Button>
      </PopoverContent>
    </Popover>
  );
}

export default ExpFilter;