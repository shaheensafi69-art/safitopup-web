import { NextResponse } from 'next/server';
import { syncAndCategorize } from '@/services/sync-and-categorize';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.SYNC_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const result = await syncAndCategorize();
  return NextResponse.json(result);
}
