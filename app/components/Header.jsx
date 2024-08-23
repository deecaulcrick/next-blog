"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="header">
        <div className="title">
          <h4>Dee Caulcrick&apos;s Blog</h4>
          <p>
            <i>Computer Science, Networks & Security </i>
          </p>
          <nav>
            <Link
              href="/posts"
              className={`link ${pathname === "/posts" ? "active" : ""}`}
            >
              posts
            </Link>
            {" "}/{" "}
            <Link
              href="/snippets"
              className={`link ${pathname === "/snippets" ? "active" : ""}`}
            >
              snippets
            </Link>
            {" "}/{" "}
            <Link
              href="/about"
              className={`link ${pathname === "/about" ? "active" : ""}`}
            >
              about
            </Link>
          </nav>
        </div>
        <div className="profile">
          <img src="/blog-pic.png" alt="picture of dee" />
        </div>
      </div>
    </>
  );
}

export default Header;
