import { getRequestContext } from '@cloudflare/next-on-pages'
import { revalidatePath } from "next/cache";

export const runtime = 'edge';

export default async function Home() {
  const castVote = async (formData: FormData) => {
    'use server';

    const name = formData.get('name');
    const vote = formData.get('vote');

    const db = getRequestContext().env.DB;
    await db.prepare('INSERT INTO votes (uid, pollId, name, vote) VALUES (?, ?, ?, ?)')
      .bind(
        Math.random().toString(36).substring(2),
        'react-meetup',
        name,
        vote
      )
      .run();
    
    console.log('Voting', db);
    revalidatePath('/');
  }

  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT vote, COUNT(*) as count FROM votes WHERE pollId = ? GROUP BY vote')
    .bind('react-meetup')
    .all();

  return (
    <div className="m-4 flex flex-col gap-4">
      <h1>Pollo 4</h1>

      <div><pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
      
      <p>
        Place your vote for the best React Meetup!
      </p>

      <form action={castVote}>
        <input type="text" name="name" placeholder="Your Name" />
        <select name="vote">
          <option value="option-1">I love App Router</option>
          <option value="option-2">I love Next and Vercel</option>
          <option value="option-3">I&apos;m in love with Guillermo</option>
          <option value="option-4">None of the above</option>
        </select>
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}
