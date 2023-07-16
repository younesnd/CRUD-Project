import quoteApi from './quoteApi'


export type Quote = {
  id: string
  quote: string
  author: string
  }
  export type TopQuotesResponse = {
  quotes: Quote[]
  }

export const fetchQuoteApi = () => {
return quoteApi.get<TopQuotesResponse>('http://localhost:4000/api/quotes/top_quotes')
}

export type QuotesData = {
  quotes: Quote[]
  hasMore?: boolean
}

export const postQuote = (quote: Omit<Quote, 'id'>) => quoteApi.post('http://localhost:4000/api/quotes', quote)
export const resetQuotes = () => quoteApi.post('http://localhost:4000/api/quotes/reset', {})

export const fetchQuotesByPage = (page: number) =>
  quoteApi.get<QuotesData>('quotes', { params: { page } }).then((res) => res.data)