import React from "react"

type IButtonCustom = {
    title?: any
    color?: string
    bg?: string
    onClick?: any
    disabled?: boolean
    classCustom?: string
    iconImg?: any
    heightIcon?: string
    widthIcon?: string
    prefix?: JSX.Element
    type?: any
}

const ButtonCustom = ({
    title,
    color = "#fff",
    bg,
    classCustom,
    disabled,
    onClick,
    iconImg,
    widthIcon,
    heightIcon,
    prefix,
    type
}: IButtonCustom) => {
    return (
        <button
            type={type ? type : "button"}
            style={{
                color: color,
                background: bg
            }}
            className={`${classCustom} ${disabled ? "buttonDisabled" : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            <p className="mb-0">
                {iconImg && (
                    <img
                        src={iconImg}
                        alt="React Logo"
                        style={{
                            height: heightIcon,
                            width: widthIcon
                        }}
                    />
                )}
                {prefix && <span className="icon icon--prefix">{prefix}</span>}
                {title && <span>{title}</span>}
            </p>
        </button>
    )
}

export default ButtonCustom
