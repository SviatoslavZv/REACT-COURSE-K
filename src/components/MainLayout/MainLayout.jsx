import {} from "react";
import{Outlet} from 'react-router-dom';
import cls from "./MainLayout.module.css"
import { Header } from "../Header"; 







export const MainLayout = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <div className = {cls.mainLayout}>
        
            <Header/>
                <div className= {cls.mainWrapper}>
                    <main className= {cls.main}>
                        <Outlet/>
                    </main>
                    <footer className= {cls.footer}> React Question Cards Application | {currentYear} <br/>
                    By Sviatoslav Zv.

                </footer>
            </div>
        </div>
     );
}
 
