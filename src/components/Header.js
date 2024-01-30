import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <h1>
                <Link to="/">todo-list</Link>
            </h1>
            <div className="menu">
                <Link to="/todo" className="Link">
                    <button>Todo</button>
                </Link>
                <Link to="/done" className="Link">
                    <button>Done</button>
                </Link>
                <Link to="/create_item" className="Link">
                    <button>Add</button>
                </Link>
            </div>
        </div>
    )
}