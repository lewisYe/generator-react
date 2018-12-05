import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>登录页</h1>
        <a href="/#/">返回首页</a>
      </div>
    )
  }
}