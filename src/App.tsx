import NeonText from './components/text/1-neon'
import Hover1 from './components/images/effects/1-hover/1-hover'
import ModernButton from './components/buttons/modern'
import './App.css'
import InputBorderGradient from './components/inputs/border-gradient'
import SVGComponent from './components/images/svg'

function App() {
  return (
    <div className='flex flex-col'>
      <SVGComponent />
      <InputBorderGradient />
      <ModernButton />
      <NeonText text="Text"/>
      <Hover1 />
    </div>
  )
}

export default App
