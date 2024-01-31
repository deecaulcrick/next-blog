import Link from "next/link";


function Header() {
    return (
        <div className="header">
            <div className="logo navlink" >
                <Link href='/' className="navlink">• Dee Caulcrick</Link>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link href='/posts' className="navlink">Posts</Link>
                    </li>
                    <li>
                        <Link href='/projects' className="navlink">Projects</Link></li>
                    <li>
                        <Link href='/snippets' className="navlink">Snippets</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header