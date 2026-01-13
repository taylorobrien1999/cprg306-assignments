import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li>
          <Link href="/week-2">Week 2 - Shopping List</Link>
        </li>
      </ul>

      <p>This site contains weekly assignment pages for CPRG 306.</p>
    </main>
  );
}