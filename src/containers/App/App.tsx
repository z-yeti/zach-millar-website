import { useState } from 'react'
import { Landing } from '../Landing'

export const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return <>{isLoading ? <Landing /> : <div>Hello</div>}</>
}
