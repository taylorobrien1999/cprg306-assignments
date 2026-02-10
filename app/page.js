import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li>
          <Link href="/week-2">Week 2 - Shopping List</Link>
          </li>
        <li>
          <Link href="/week-3">Week 3 — Shopping List</Link>
          </li>
        <li>
          <Link href="/week-4">Week 4 — Handling Lists</Link>
          </li>
          <li>
          <Link href="/week-5">Week 5 — Interactivity with Forms</Link>
          </li>
          <li>
            <Link href="/week-6">Week 6 — Form Interactivity </Link>
          </li>

      </ul>

      
      <p>This site contains weekly assignment pages for CPRG 306.</p>
    </main>
  );
}