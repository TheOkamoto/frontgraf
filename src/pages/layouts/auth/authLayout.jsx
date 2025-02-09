import { Outlet } from "react-router-dom";
import iconLogo from "../../../assets/logo_normal.png"

export default function AuthLayout() {
    return (
        <div className="grid lg:grid-cols-3  min-h-screen" >
            <div className="hidden lg:flex flex-col 
            border-r border-foreground bg-primary  
            h-full justify-center items-center p-10">
                <img src={iconLogo} alt="Ícone Gráfica" 
                className="max-w-sm"/>
            </div>
            <div className="flex flex-col 
            justify-center 
            items-center gap-3 
            text-lg text-foreground p-10 lg:bg-muted lg:col-span-2">
                <Outlet />
            </div>
        </div>    
    );
}
