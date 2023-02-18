import { Link } from "react-router-dom"
import style from "./home.module.css"
// import './home.css'

const HomePage = () => {

    return (
        <div className="link">
             <div className={style.logo}><h2>Book Management</h2> 
            <div className={style.link}>
                
                <Link to='/login'>Login</Link><br/>
                <Link to="/signup" >SignUp</Link>
                </div>
            
            </div>
        </div>
    )
}

export default HomePage