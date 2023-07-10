import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={className} disabled={true}>
      Button
    </button>
  )
}
