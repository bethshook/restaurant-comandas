import React, { Component } from 'react';
import './App.css';

import MenuItem from './MenuItem';

const items = [
    {
        name: 'Bistec',
        price: 20
    },
    {
        name: 'Costilla',
        price: 20
    },
    {
        name: 'Chuleta',
        price: 20
    },
    {
        name: 'Gaona\'s',
        price: 30
    },
    {
        name: 'Rib-Eye',
        price: 30
    },
    {
        name: 'Pechuga',
        price: 30
    },
    {
        name: 'Campechano',
        price: 30
    },
    {
        name: 'Pastor',
        price: 30
    },
    {
        name: 'Gringa',
        price: 30
    },
    {
        name: 'Barbacoa',
        price: 30
    }
    ];

localStorage.setItem('items', JSON.stringify(items));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        this.getMenu();
    }

    getMenu() {
        const items = JSON.parse(localStorage.getItem('items'));

        this.setState({ items });
    }

    onDelete(name) {
        console.log(name);

        //this.setState...
    }

  render() {
    return (
      <div className="App">
        <h1>El Califa - Comandas</h1>
          {
              this.state.items.map(item => {
                  return (
                      <MenuItem
                          key={item.name}
                          {...item}
                          onDelete={this.onDelete}
                      />
                  )
              })
          }
      </div>
    );
  }
}

export default App;
