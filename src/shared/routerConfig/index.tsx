import React from 'react'
import HomeTour from '../../Modules/HomeTour'
import { ITypeRouter } from '../constants/IConstant'

const RouterLinkDefine: ITypeRouter[] = [
  {
    path: "/",
    exact: true,
    component: <HomeTour />
  }
]

export default RouterLinkDefine