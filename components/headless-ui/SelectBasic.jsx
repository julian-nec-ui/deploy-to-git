import { Select } from "@headlessui/react";

export default function SelectBasic(){
  return (
    <Select name="link" aria-label="Select video">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>

    </Select>
  );
}