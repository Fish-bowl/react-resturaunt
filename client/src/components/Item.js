import React from 'react'

class Item extends React.Component {



  state = { item: {} }


  render() {
    const { item: { name, description, price}} = this.state
  
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }
}