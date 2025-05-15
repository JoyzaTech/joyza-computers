// app/api/test/route.js
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('testdb')
    const data = await db.collection('testcollection').find({}).toArray()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500
    })
  }
}
