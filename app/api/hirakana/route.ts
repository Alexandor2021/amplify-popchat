import type { NextRequest } from 'next/server'
// import { getRequestContext } from '@cloudflare/next-on-pages'
// import { analyzeJapanese } from '@/processor'

// TODO! 这个edge不用写，build后，是完全可以的啊，
// TODO! 使用了edge，反而报找不到‘path’和‘fs’的问题了
// export const runtime = 'edge'

export async function POST(request: NextRequest) {

  try {
    const { data }: any = await request.json()
    
    if (!data) {
      return Response.json({ error: 'Missing data in request body' }, { status: 400 })
    }

    // const hiragana = await analyzeJapanese(data)

    return Response.json({ hiragana:8899 }, { status: 200 })
  } catch (error) {
    console.error('Error processing request:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix
}
