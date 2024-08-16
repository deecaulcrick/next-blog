import Link from "next/link";
import LatestPosts from "./components/LatestPosts";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="homepage">
      <LatestPosts />
      <Link href="posts">See all posts </Link>
    </div>
  );
}
