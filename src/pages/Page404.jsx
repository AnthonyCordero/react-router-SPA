import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="doguito-imag" src={image} alt="Doguito" />
            <p className="notfound-text">Ops, this address does not exist</p>
        </main>
    )
}

export default Page404