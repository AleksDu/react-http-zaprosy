import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';



export default class App extends Component {
  state = {
  pokemonName: '',
}

  handleFormSubmit = pokemonName => {
    this.setState({pokemonName})
  }

  render() {
 return (
      <div style={{ maxWidth: 1170, margin: 'o auto', padding: 20 }}>
         
        
     <PokemonForm onSubmit={this.handleFormSubmit} />
     <PokemonInfo pokemonName={ this.state.pokemonName}/>
     <ToastContainer autoClose={3000} />
   </div>
 );
  };
 };



// Простий варіант
// export default class App extends Component{


//   state = {
//   pokemon: null,
//   loading: false,
// }

//   componentDidMount() { 
//     this.setState({ loading: true });

//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//           .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   };


//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: 'o auto', padding: 20 }}>
//         <ToastContainer autoClose={3000} />
//         {/* {this.state.pokemon && (<div>Тут будет покемон после фетча и когда в стейт запишем </div>)} */}
//         {this.state.loading && <h1>Загружаем</h1>}
//         {this.state.pokemon && (<div>{this.state.pokemon.name} </div>)}

//       </div>
//     );
//   };
// };
