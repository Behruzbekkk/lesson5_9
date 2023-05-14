import './style.css'
import logo from './images/img.png'
import logotip from './images/logo.png'
import image from './images/1_pO9ttF1Z_KTOre0yGiClxQ.png'
import third from './images/download 1.png'
import fourth from './images/microsoft_PNG4.png'
import bigImg from './images/sec-2.png'
export function Main() {
  return(
    <div>
    <div className='main-div'>
      <div className='two-divs'>
        <h1>Anytime,anywhere Develop your skill 
        by Online
        </h1>
        <p className='main-paragraph'>Online education is a form of education where students use their home computers through the internet. For many nontraditional students, among them all those who want to continue.</p>
        <button className='main-btn'>All Cources</button>
      </div>
      <div className='second-divs'>
        <img className='img-main' src={logo} alt="logo" />
      </div>
    </div>
    <div className='main-navbar'>
         <h2>Trusted by 30,000 satisfied students</h2>
         <img src={logotip} alt="" />
         <img src={image} alt="" />
         <img src={third} alt="" />
         <img src={fourth} alt="" />
    </div>
    <div className="main-big-img">
      <img style={{width: "1400px"}} src={bigImg} alt="" />
    </div>
    </div>
  )
}