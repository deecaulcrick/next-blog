import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h4>Dee Caulcrick&apos;s Blog</h4>
        <p>
          <i>Pentesting from my couch</i>
        </p>
      </div>
      <div className="profile">
        <img src="/blog-pic.png" alt="picture of dee" />
      </div>
    </div>
  );
}

export default Header;
