import React from 'react'

import { ButtonProps } from './interface'

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={className} disabled={true}>
      Button
    </button>
  )
}

export default Button
