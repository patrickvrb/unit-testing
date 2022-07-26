import React, { FC } from 'react'
import LoginButton from '../../components/LoginButton'

const Welcome: FC = () => {
  return (
  <>
    <bds-typo variant="fs-40" bold="bold">Welcome, Patrick!</bds-typo>
    <h2>For lessons about React Unit Testing, click <a href="https://google.com" target="_blank">here</a>!</h2>
  </>
  )
}

export default Welcome