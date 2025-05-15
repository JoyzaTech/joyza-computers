'use client' // if using hooks like useState/useEffect

import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <main>
      <h1>MongoDB Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
