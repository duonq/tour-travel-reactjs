import { Dropdown, Space } from "antd";
import React from "react";
import Avata from "../../../src/assets/avata.svg";

type ITyprDropdownCustom = {
  titleDropdown?: string;
  iconDropdown?: any;
  clasCustom?: string;
  menuDropdown?: any;
};

const DropdownCustom = ({
  menuDropdown,
  titleDropdown
}: ITyprDropdownCustom) => {
  return (
    <Dropdown overlay={menuDropdown} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {titleDropdown}
          <span>
            <img src={Avata} alt="" />
          </span>
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownCustom;
