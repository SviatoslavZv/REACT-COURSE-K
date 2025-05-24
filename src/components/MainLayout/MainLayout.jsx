import { Outlet } from "react-router-dom";
import  "./MainLayout.css"

export const MainLayout = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <div className= "mainLayout">
            <header>Header</header>
            <div className= "mainWrapper">
                <main className= "main"><Outlet/></main>
                <footer className= "footer"> React Question Cards Application | {currentYear} <br/>
                By Slava Zv.

                </footer>
            </div>
        </div>
     );
}
 
