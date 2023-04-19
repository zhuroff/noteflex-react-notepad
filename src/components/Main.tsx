import { useEffect } from "react"

export const Main = () => {
  const getNotebooks = () => {
    fetch('/notebooks.json')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.error(error))
  }

  const getSingleNote = () => {
    fetch('/1-1.json')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getSingleNote()
  }, [])

  return (
    <main className="notepad">
      <h1>Well!</h1>
    </main>
  )
}
