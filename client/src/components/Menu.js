import React from 'react'

class Menu extends React.Component {

  state = { items: [
    
  ] }

  render() {
    const { items } = this.state
      return (
        <ul>
          { items.map(i =>
            <li key={i.id}>
              <h3 to={`/items/${i.id}`}>{i.name}</h3>
            </li>)
          }
        </ul>
      )
  }

}

export default Menu 