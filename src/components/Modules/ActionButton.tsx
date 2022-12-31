import { FC } from "react"

interface IProps{
    title: string
}

const ActionButton:FC<IProps> = ({title}) => {
  return (
    <button className="border border-indigo-300 rounded-lg p-3 text-white bg-indigo-700 font-IRANSans">
        {title}
    </button>
  )
}

export default ActionButton