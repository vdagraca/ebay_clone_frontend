import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import ProductFormContainer from './components/ProductFormContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Route path="/" exact component={ProductListContainer} />
          <h1>My Advertisement</h1>
          <Route path="/" exact component={ProductFormContainer} />
          <Route path="/products/:id" component={ProductDetailsContainer} />
        </div>
      </Provider>
    )
  }
}
