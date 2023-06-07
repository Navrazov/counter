import './App.css'
import Header from './components/header/react-modules/header'
import MainContent from './components/mainContent/react-modules/mainContent'
import Footer from './components/footer/react-modules/footer'

const  App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Header />
    <MainContent />
    <Footer />
     
    </div> 
  )
}

export default App
