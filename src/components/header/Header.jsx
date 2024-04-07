import { Link } from "react-router-dom"

function Header() {
    return <header className="flex justify-center">
        <div className="w-4/5 p-2 max-w-7xl">
            <p className="font-title text-5xl">E-COMMERCE</p>
        </div>
        <Link to="/cart-list">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>
        </Link>

    </header>
}

export default Header