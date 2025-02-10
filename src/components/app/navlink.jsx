import { useLocation } from "react-router-dom"; // Add this import statement
import { Link } from "react-router-dom";

export function NavLink(props){
    const { pathname } = useLocation();
    return(
        <Link
            {...props}
            data-current = {pathname === props.to}
            className="flex items-center gap-2 text-sm 
            font-medium text-accent-foreground transition-colors
            hover:text-accent-hover data-[current=true]"

        />
    );
}