import { useState } from 'react'
import CalcButton from './CalcButton'
import { X, Divide, Minus, Plus, Delete } from 'lucide-react'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumberStarting, setNewNumberStarting] = useState(true)

  const handleNumberClick = (num: string) => {
    if (newNumberStarting) {
      setDisplay(num)
      setNewNumberStarting(false)
    } else {
      if (display.length < 9) {
        setDisplay(display === '0' ? num : display + num)
      }
    }
  }

  const handleOperationClick = (op: string) => {
    setOperation(op)
    setPreviousValue(parseFloat(display))
    setNewNumberStarting(true)
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display)
      let result = 0
      switch (operation) {
        case '+':
          result = previousValue + current
          break
        case '-':
          result = previousValue - current
          break
        case '*':
          result = previousValue * current
          break
        case '/':
          result = previousValue / current
          break
      }
      setDisplay(result.toString().slice(0, 9))
      setPreviousValue(null)
      setOperation(null)
      setNewNumberStarting(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setNewNumberStarting(true)
  }

  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
      setNewNumberStarting(true)
    }
  }

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
      setNewNumberStarting(false)
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-3xl shadow-xl w-[320px]">
      <div className="bg-gray-800 p-4 rounded-xl mb-4">
        <div className="text-right text-white text-4xl font-light truncate">
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        <CalcButton onClick={handleClear} className="bg-gray-700">
          C
        </CalcButton>
        <CalcButton onClick={handleDelete} className="bg-gray-700">
          <Delete className="w-5 h-5" />
        </CalcButton>
        <CalcButton onClick={() => handleOperationClick('/')} className="bg-orange-500">
          <Divide className="w-5 h-5" />
        </CalcButton>
        <CalcButton onClick={() => handleOperationClick('*')} className="bg-orange-500">
          <X className="w-5 h-5" />
        </CalcButton>

        <CalcButton onClick={() => handleNumberClick('7')}>7</CalcButton>
        <CalcButton onClick={() => handleNumberClick('8')}>8</CalcButton>
        <CalcButton onClick={() => handleNumberClick('9')}>9</CalcButton>
        <CalcButton onClick={() => handleOperationClick('-')} className="bg-orange-500">
          <Minus className="w-5 h-5" />
        </CalcButton>

        <CalcButton onClick={() => handleNumberClick('4')}>4</CalcButton>
        <CalcButton onClick={() => handleNumberClick('5')}>5</CalcButton>
        <CalcButton onClick={() => handleNumberClick('6')}>6</CalcButton>
        <CalcButton onClick={() => handleOperationClick('+')} className="bg-orange-500">
          <Plus className="w-5 h-5" />
        </CalcButton>

        <CalcButton onClick={() => handleNumberClick('1')}>1</CalcButton>
        <CalcButton onClick={() => handleNumberClick('2')}>2</CalcButton>
        <CalcButton onClick={() => handleNumberClick('3')}>3</CalcButton>
        <CalcButton onClick={handleEquals} className="bg-orange-500 row-span-2">
          =
        </CalcButton>

        <CalcButton onClick={() => handleNumberClick('0')} className="col-span-2">
          0
        </CalcButton>
        <CalcButton onClick={handleDecimal}>.</CalcButton>
      </div>
    </div>
  )
}

export default Calculator
