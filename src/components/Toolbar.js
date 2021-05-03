import {Link} from "react-router-dom";

function Toolbar() {
    return (
        <div className="toolbar">
            <Link to="/">Home</Link>
            <Link to="/upload">Upload</Link>

        </div>
    )
}

export default Toolbar