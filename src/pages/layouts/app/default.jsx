import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="gridgrid-cols-2">
            <div>
                <h1>left side</h1>
            </div>
            <div>
                <h1>right side</h1>
            </div>
                <Outlet />
        </div>    
    );
}
