import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AgregarAlbum from './components/AgregarAlbum'
import Albumes from './components/Albumes'
import Canciones from './components/Canciones'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={AgregarAlbum} />
        <Route exact path='/agregar-album' component={AgregarAlbum} />
        <Route path='/albumes' component={Albumes} />
        <Route path='/canciones' component={Canciones} />
      </Layout>
    );
  }
}
