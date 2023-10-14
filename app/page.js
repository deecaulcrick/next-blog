import Link from "next/link";
import LatestPosts from './components/LatestPosts'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className="homepage">
      <div className="about">
        <p>
          Designer. Teacher. Frontend Engineer. Computer Science Student. <a href='https://www.notion.so/@deecaulcrick' target='_blank'>Notion fan girl</a>.
        </p>
      </div>

      <LatestPosts />
      <Link href='posts'>See all posts </Link>
    </div>
  )
}

