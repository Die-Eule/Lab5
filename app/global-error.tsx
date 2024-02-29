'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <img src="/rocket_team.png" alt="rocket_team" />
        <h1>404</h1>
        <h2>The rocket team <span>has won this time.</span></h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}