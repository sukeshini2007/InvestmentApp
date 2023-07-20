import { useState } from 'react'
import { DataTable } from './component/DataTable'
import { Header } from './component/Header'
import { UserInput } from './component/UserInput'
import './App.css'

function App() {
  const [input, setInput] = useState(null)
  const calculateHandler = (input) => {
    setInput(input)
  }
  const endData = []
  if (input) {
    let curretSaving = input['current']
    const yearlySaving = input['yearly_saving']
    const expectIntrest = input['expected_intrest'] / 100
    const duration = input['investment_duration']
    for (let i = 0; i < duration; i++) {
      const endIntrest = curretSaving * expectIntrest
      curretSaving += endIntrest + yearlySaving
      endData.push({
        year: i + 1,
        intrest: endIntrest,
        savingEndOfYear: curretSaving,
        saving: yearlySaving,
      })
    }
  }
  return (
    <div className="App">
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!input && <p>No investemnt</p>}
      {input && <DataTable data={endData} initial={input['current']} />}
    </div>
  )
}

export default App
