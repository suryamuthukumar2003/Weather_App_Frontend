import { Fragment, useState } from 'react'
import Appbar from './components/Appbar'
import History from './components/History'
function App() {
  return(
    <Fragment>
      <Appbar/>
      <History />
    </Fragment>
  )
}

export default App
