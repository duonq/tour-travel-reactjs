import React from 'react'
import { ITypeButtonCustom } from '../../shared/constants/IConstant'

const ButtomCustom = (props: ITypeButtonCustom) => {
    const { title, color, bg, colorBorder, classCustom, onAction, disabled, icon, heightIcon, widthIcon, prefix, suffix } = props
    return (
        <button type='button'
            className={`${classCustom} ${disabled ? "disabled-btn" : ""}`}
            style={{
                color: color,
                background: bg,
                border: colorBorder ? `1px solid ${colorBorder}` : ""
            }}
            onClick={onAction}
            disabled={disabled}
        >
            <p>
                {icon && (
                    <img src={icon} alt=""
                        style={{
                            height: heightIcon,
                            width: widthIcon
                        }}
                    />
                )}
                {prefix && <span className="icon icon--prefix">{prefix}</span>}
                <span>{title}</span>
                {suffix && <span className="icon icon--suffix">{suffix}</span>}
            </p>
        </button>
    )
}

export default ButtomCustom