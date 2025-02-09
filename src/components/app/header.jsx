import { Separator } from "@radix-ui/react-separator";
import Logo from "../../assets/logo_normal.png";

export function Header() {
    return(
        <div className="bg-primary">
            <div className="flex h-16 items-center gap-6 p-6">  
                <img src={Logo} alt="Logo" className="h-9 w-9" />
                <Separator orientation="vertical" className="h-6 bg-muted"/>
            </div>
        </div>
    );
}