import mortyApi from './mortyApi'
export type MortyProp = {
  name: string
  image: string
  origin: Location
}

export type Location = { name: string; url: string }
export type MortyData = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export const fetchMorty = () => {
  let id = Math.floor(Math.random() * 500)
  let id_2 = Math.floor(Math.random() * 500)
  let id_3 = Math.floor(Math.random() * 500)
  let id_4 = Math.floor(Math.random() * 500)

  let url = 'https://rickandmortyapi.com/api/character/'

  return mortyApi.get<MortyData>(
    url.concat(id.toString()),
    url.concat(id_2.toString()),
    url.concat(id_3.toString()),
    url.concat(id_4.toString())
  )
}
