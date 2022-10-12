import React, { useState } from "react";
import * as Icon from "react-feather";
import { ITypeInputCustom } from "../../shared/constants/IConstant";

const TextInput = ({ ...props }: ITypeInputCustom) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="text-input">
      <div
        className={`input-group ${props.message ? "input-group--error" : ""} ${
          props.className
        }`}
      >
        {/* prefix icon
        {props.prefix ? (
          <div className="icon icon--prefix">{props.prefix}</div>
        ) : null} */}
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value ? props.value : value}
          onChange={props.onChange ? props.onChange : handleChange}
          onBlur={props.onBlur}
        />
        {/* suffix icon */}
        {/* {props.suffix ? (
          <div className="icon icon--suffix">{props.suffix}</div>
        ) : null} */}
      </div>
      {props.showMessage || props.showMessage === undefined ? (
        <div className="message">
          {props.message ? (
            <p className={`message__text ${props.messageStyle}`}>
              {props.message}
            </p>
          ) : (
            <p
              className={`message__text message__text--hidden ${props.messageStyle}`}
            >
              placeholder
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

const PasswordInput = ({ ...props }: ITypeInputCustom) => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  const renderSuffixIcon = () => {
    return passwordVisible ? (
      <div className="icon icon--suffix">
        {props.visibleIcon ? (
          <div
            onClick={() => {
              setPasswordVisible(false);
            }}
          >
            {props.visibleIcon}
          </div>
        ) : (
          <Icon.Eye
            size={18}
            onClick={() => {
              setPasswordVisible(false);
            }}
          />
        )}
      </div>
    ) : (
      <div className="icon icon--suffix">
        {props.hiddenIcon ? (
          <div
            onClick={() => {
              setPasswordVisible(true);
            }}
          >
            {props.hiddenIcon}
          </div>
        ) : (
          <Icon.EyeOff
            size={18}
            onClick={() => {
              setPasswordVisible(true);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="text-input">
      <div
        className={`input-group ${props.message ? "input-group--error" : ""} ${
          props.className
        }`}
      >
        <input
          type={passwordVisible ? "text" : "password"}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value ? props.value : password}
          onChange={props.onChange ? props.onChange : handleChange}
          onBlur={props.onBlur}
        />
        {/* suffix icon */}
        {renderSuffixIcon()}
      </div>
      <div className="message">
        {props.message ? (
          <p className={`message__text ${props.messageStyle}`}>
            {props.message}
          </p>
        ) : (
          <p
            className={`message__text message__text--hidden ${props.messageStyle}`}
          >
            placeholder
          </p>
        )}
      </div>
    </div>
  );
};

const TextArea = ({ ...props }: ITypeInputCustom) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="text-area">
      <div className="input-group">
        <textarea
          className={`text-input-area ${
            props.message ? "text-input-area--error" : ""
          } ${props.className}`}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value ? props.value : value}
          onChange={props.onChange ? props.onChange : handleChange}
          onBlur={props.onBlur}
        />
      </div>
      <div className="message">
        {props.message ? (
          <p className={`message__text ${props.messageStyle}`}>
            {props.message}
          </p>
        ) : (
          <p
            className={`message__text message__text--hidden ${props.messageStyle}`}
          >
            placeholder
          </p>
        )}
      </div>
    </div>
  );
};

const InputCustom = ({ ...props }: ITypeInputCustom) => {
  const renderInput = () => {
    switch (props.type) {
      case "text":
        return <TextInput {...props} />;
      case "password":
        return <PasswordInput {...props} />;
      case "textarea":
        return <TextArea {...props} />;
      default:
        return <TextInput {...props} />;
    }
  };

  return <div className="input-custom">{renderInput()}</div>;
};

export default InputCustom;
