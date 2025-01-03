interface CalcButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

const CalcButton = ({ onClick, children, className = '' }: CalcButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        h-16
        rounded-xl
        text-white
        text-2xl
        font-medium
        flex
        items-center
        justify-center
        bg-gray-600
        hover:bg-opacity-80
        transition-colors
        duration-200
      `}
    >
      {children}
    </button>
  )
}

export default CalcButton
