import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // map each poekmon recieved as props to a pokemon card and assign it a key of the pokemon id
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
