import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './router'

const render = (props, Component) => {
  const { container } = props;
  ReactDOM.render(
    <Component />,
    container ? container.querySelector('#root') : document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({}, RouterConfig);
}

export async function bootstrap() {
  console.log('【react-bootstrap】');
}

export async function mount(props) {
  console.log('【react-mount】', props);
  render(props, RouterConfig);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

reportWebVitals();
