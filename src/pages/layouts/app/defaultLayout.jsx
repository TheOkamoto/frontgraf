import { Header } from "@/components/app/header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-muted">
            <Header />
            <div className="flex flex-col flex-1 gap-4 p-8 pt-6">
                <Outlet />
            </div>

        </div>    
    );
}
