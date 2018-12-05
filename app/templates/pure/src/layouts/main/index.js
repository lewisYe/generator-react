import React from 'react';
import { RouteWithSubRoutes } from '../../util';
import './index.scss';


export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { routes } = this.props;
    return (
      <div style={{textAlign:'center'}}>
        <h1>welcome to react</h1>
        <a href="#/login">跳转到登录页</a>
        <a onClick={()=>{this.props.history.push('/test')}} className="link">跳转到子页面</a>
        <div>
          {
            routes && routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          }
        </div>
      </div>
    )
  }
}