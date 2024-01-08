import { useEffect, useState } from 'react'

const SimpleCalculator = () => {
  const [values, setValues] = useState(0)
  const [sValues, setSValues] = useState(0)
  const [results, setResults] = useState(0)

  const handleClick = () => {
    const sum = parseFloat(values) + parseFloat(sValues)
    setResults(sum)
  }

  return (
    <div>
      <input
        type="number"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={sValues}
        onChange={(e) => setSValues(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>{results}</span>
    </div>
  )
}

export default SimpleCalculator
