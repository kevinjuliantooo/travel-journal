import React from 'react'
import Header from './Header'
import Journal from './Journal'
import data from './data'

export default function App() {
  const journals = data.map((item, index) => {
    return(
      <Journal
        key={index} 
        item={item}
      />
    )
  })
  

  return(
    <div>
      <Header />
      <section>
        {journals}
      </section>
    </div>
  )
}
