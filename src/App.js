import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer'
import ProductFormContainer from './components/ProductFormContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Header />
          <Route path="/" exact component={ProductListContainer} />
          <Route path="/" exact component={ProductFormContainer} />
          <Route path="/products/:id" component={ProductDetailsContainer} />
        </div>
      </Provider>
    )
  }
}
