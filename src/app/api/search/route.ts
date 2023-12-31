import { Request } from 'next/dist/compiled/@edge-runtime/primitives'
import { NextResponse } from 'next/server'
import { SearchData } from '@/lib/types'
import { next } from 'sucrase/dist/types/parser/tokenizer'

type TSearchResult = {
	country: string,
	region: string,
	id: number,
	lat: number,
	lon: number,
	name: string,
	url: string
}

export interface ISearchResponse {
	data: TSearchResult[],
	ok: boolean
}

export async function GET(req: Request) {
	const city = new URL(req.url).searchParams.get('city')
	if (!city) return NextResponse.json({ error: 'Отсутствует название города', ok: false })

	const result = await fetch(`https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}&q=${city}&lang=ru`, {
		next: { revalidate: 7200 }
	})
		.then(result => result.json())
		.catch(err => ({ error: err.message }))

	if (result.error) return NextResponse.json({ error: result.error, ok: false })

	return NextResponse.json<ISearchResponse>({ data: result, ok: true })
}