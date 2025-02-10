import { Separator } from "../ui/separator";
import Logo from "../../assets/logo_normal.png";
import { NavLink } from "./navlink";
import Users from "../../pages/app/users/UserList";

export function Header() {
    return (
        <div className="bg-primary">
            <div className="flex h-16 items-center gap-6 p-6">
                <img src={Logo} alt="Logo" className="h-9 w-9" />
                <Separator orientation="vertical" className="h-6 bg-black " />
                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/users"> 
                        Usuários
                    </NavLink >
                </nav>
            </div>
        </div>
    );
}