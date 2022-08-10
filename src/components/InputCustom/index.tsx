import React from 'react'
import { ITypeInputCustom } from '../../shared/constants/IConstant'

const TextInput = ({ ...props }: ITypeInputCustom) => {
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}

const InputCustom = () => {
    return (
        <div>InputCustom</div>
    )
}

export default InputCustom