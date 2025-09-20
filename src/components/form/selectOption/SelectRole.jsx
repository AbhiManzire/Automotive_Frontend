import React from "react";
import { Select } from "@windmill/react-ui";

const SelectRole = ({ setRole, register, name, label }) => {
  return (
    <>
      <Select
        onChange={(e) => setRole(e.target.value)}
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>
          Staff role
        </option>
        <option value="Super Admin">Super Admin</option>
        <option value="Vendor">Vendor</option>
        <option value="Accountant">Accountant</option>
      </Select>
    </>
  );
};

export default SelectRole;
