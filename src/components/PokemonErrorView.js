import ErrorImage from './error.jpg';

export default function PokemonErrorView({ message }) {
    return (
        <div role='alert'>
            <img src={ErrorImage} width='240' alt='sadcat' />
            <p>{message}</p>
        </div>
    )
}