import { DatePicker, FormInstance, Input, Radio, Select, Space } from "antd"
import Form from "antd/lib/form"
import React, { useState } from "react"
import styles from "./index.module.scss"
import stylesInputRadio from "../InputRadio/index.module.scss"
import TextArea from "antd/lib/input/TextArea"
import moment from "moment"
import { TypeInputCustom } from "../../shared/emuns"
import { autoTrimDebounceInput } from "../../shared/function"
import { CaretDownOutlined } from "@ant-design/icons"
import InputImage from "../InputImage"

const { Option } = Select

// types params input custom
type IPropsInput = {
  classCustomLabel?: string
  classCustomInput?: string
  disabled?: boolean
  errSizeImage?: string
  formatValue?: any
  formatDebounce?: any
  form?: FormInstance
  onKeyPress?: Function
  isKeyPress?: boolean
  isDebounce?: boolean
  title?: string
  typeInput?: string
  listDataRadio?: Object[]
  listNameImage?: any
  valChecked?: any
  name?: string
  maxSizeImage?: number
  valueInput?: any
  placeholder?: string
  prefix?: JSX.Element
  rules?: any[]
  required?: boolean
  suffix?: JSX.Element
  handleOnChange?: (value: any) => void
  handleSearch?: (value: any) => void
  refPass?: any
  onPressEnter?: (e: any) => void
  rows?: number
  autoSize?: any
  defaultValue?: number
  radioDirection?: any
  listOptions?: any
  bordered?: boolean
}
// input custom use all in project
const InputCustom = ({
  classCustomLabel,
  classCustomInput,
  disabled,
  title,
  typeInput,
  name,
  listDataRadio,
  valChecked,
  placeholder,
  rules,
  required,
  prefix,
  suffix,
  formatValue,
  bordered,
  form,
  valueInput,
  onKeyPress,
  handleOnChange,
  handleSearch,
  refPass,
  onPressEnter,
  rows,
  autoSize,
  listOptions,
  radioDirection,
  listNameImage
}: IPropsInput) => {
  const [openSelect, setOpenSelectBox] = useState<boolean>(false)
  // list css custom label
  const listClassInput = () => {
    let listCss = styles.inputCustom

    if (
      typeInput === TypeInputCustom.image ||
      typeInput === TypeInputCustom.textarea
    ) {
      listCss += " " + styles.inputCustomImage
    }

    if (classCustomLabel) {
      listCss += " " + classCustomLabel
    }
    return listCss
  }

  const onKeyUp = async (evt: any) => {
    const { name, value } = evt.target

    if (formatValue) {
      formatValue(evt)
      return
    }
    // @ts-ignore
    await autoTrimDebounceInput({ formInstance: form, name, value })
  }

  function disabledDate(current: any) {
    return current && current <= moment().subtract(1, "day")
  }

  const countImageItem = (listImage: any[]) => {
    const changeValueImage = (nameImage: any, urlImage: any) => {
      form?.setFieldsValue({
        [nameImage]: urlImage
      })
    }
    return (
      <div>
        {
          listImage.map(({ name, url }, index) =>
            <Form.Item key={index} name={name} style={{ flex: 1 }}>
              <InputImage
                name={name}
                url={url}
                onChangeImage={changeValueImage}
                classCustomInput={classCustomInput}
              />
            </Form.Item>
          )
        }
      </div>
    )
  }

  const renderTypeInput = () => {
    switch (typeInput) {
      case TypeInputCustom.date:
        const dateFormat = "YYYY年MM月DD日"
        const customFormat = (value: any) => `${value.format(dateFormat)}`
        return <DatePicker disabledDate={disabledDate} format={customFormat} />
      case TypeInputCustom.textarea:
        return (
          <TextArea
            value={valueInput}
            autoComplete="on"
            rows={rows || 4}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleOnChange}
            // onBlur={onBlur}
            onPressEnter={onPressEnter}
            ref={refPass ? refPass : null}
            autoSize={autoSize}
          />
        )
      case TypeInputCustom.radio:
        return (
          <Radio.Group
            className={stylesInputRadio.inputRadioCustom}
            size="large"
            name={name}
            value={valChecked}
          >
            <Space direction={radioDirection}>
              {listDataRadio &&
                listDataRadio.map((item: any, index) => (
                  <Radio key={index} value={item.value}>
                    {item.label}
                  </Radio>
                ))}
            </Space>
          </Radio.Group>
        )
      case TypeInputCustom.select:
        return (
          <Select
            open={openSelect}
            placeholder={placeholder}
            suffixIcon={
              <CaretDownOutlined
                onClick={() => setOpenSelectBox(!openSelect)}
              />
            }
            onDropdownVisibleChange={visible => {
              setOpenSelectBox(visible)
            }}
            options={listOptions}
            bordered={bordered}
            style={{ minWidth: "10%" }}
            onChange={handleOnChange}
          ></Select>
        )
      case TypeInputCustom.password:
        return (
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className={classCustomInput}
            prefix={prefix}
            suffix={suffix}
            name={name}
            type="password"
            value={valueInput}
            onKeyUp={onKeyUp}
            onKeyPress={e => {
              if (onKeyPress) {
                onKeyPress(e)
              }
            }}
          />
        )
      case TypeInputCustom.number:
        return (
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className={classCustomInput}
            prefix={prefix}
            suffix={suffix}
            name={name}
            type="number"
            value={valueInput}
            onKeyUp={onKeyUp}
            onKeyPress={e => {
              if (onKeyPress) {
                onKeyPress(e)
              }
            }}
          />
        )
      case TypeInputCustom.image:
        return (
          // <div className="d-flex">
          //   {
          //     countImageItem(listNameImage)
          //   }
          // </div>
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className={classCustomInput}
            prefix={prefix}
            suffix={suffix}
            name={name}
            type="file"
            value={valueInput}
          />
        )
      case 'search':
        return (
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className={classCustomInput}
            prefix={prefix}
            suffix={suffix}
            name={name}
            onChange={handleOnChange}
            value={valueInput}
            onKeyUp={onKeyUp}
            onKeyPress={e => {
              if (onKeyPress) {
                onKeyPress(e)
              }
            }}
            ref={refPass ? refPass : null}
          />
        )
      default:
        return (
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className={classCustomInput}
            prefix={prefix}
            suffix={suffix}
            name={name}
            onChange={handleOnChange}
            value={valueInput}
            onKeyUp={onKeyUp}
            onKeyPress={e => {
              if (onKeyPress) {
                onKeyPress(e)
              }
            }}
            ref={refPass ? refPass : null}
          />
        )
    }
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const fillId = `starGrad${Math.random().toFixed(15).slice(2)}`
  return (
    <Form.Item
      label={
        title && (
          <div>
            {title && <span>{title}</span>}
            <span className={styles.required}>
              {required ? " (*) " : ""}
            </span>
          </div>
        )
      }
      name={name}
      rules={rules}
      className={listClassInput()}
      colon={false}
      labelAlign={"left"}
      required={required}
      htmlFor=""
      id={fillId}
      // validateTrigger={["onBlur", "onChange"]}
      validateStatus=""
    >
      {renderTypeInput()}
    </Form.Item>
  )
}

export default InputCustom
