import React from "react"
import { Select } from "antd"

const SelectCustom = ({ options, onAction, valueInit, ...res }: any) => {
  return (
    <Select
      {...res}
      value={valueInit}
      options={options}
      showArrow={true}
      style={{ minWidth: "10%" }}
      onChange={value => onAction(value)}
    ></Select>
  )
}

export default SelectCustom
