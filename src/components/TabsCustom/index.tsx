import React, { useState } from 'react'
import { ITypeTabCustom } from '../../shared/constants/IConstant'
import style from './index.module.scss'

const TabCustom = ({ ...props }: ITypeTabCustom) => {
    const [currentTab, setCurrentTab] = useState(0)
    return (
        <div className={style.tabCustom}>
            <nav className={style.tabList}>
                {props.tabLabels.map((tabLabel, index) => {
                    return (
                        <a key={index} onClick={() => { setCurrentTab(index) }}>
                            {tabLabel}
                        </a>
                    )
                })}
            </nav>
            <div>
                {props.tabPanes ? props.tabPanes[currentTab] : null}
            </div>
        </div>
    )
}

export default TabCustom