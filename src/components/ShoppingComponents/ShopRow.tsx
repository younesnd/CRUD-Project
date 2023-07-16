import { useState } from 'react'
import { useImmer } from 'use-immer'
import { ShoppingListState, Additem } from './ShoppingList.types'
const shoppingItems: ShoppingListState = {
  newShoppingItemName: '',
  items: [
    { id: '1', name: 'Sea Salt' },
    { id: '2', name: 'Apples' },
    { id: '3', name: 'Chicken breasts' },
  ],
}
const getUuid = () => '_' + Math.random().toString(36).substring(2, 9)

const ShopRow = () => {
  const [data, setData] = useImmer(shoppingItems.items)
  const [word, setWord] = useImmer(shoppingItems.newShoppingItemName)
  const [isEditing, setIsEditing] = useImmer(false)
  const [input, setInput] = useImmer(shoppingItems.items[0].name)

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }
  const OnAddItem = () => {
    setData((draft) => {
      draft.push({ id: getUuid(), name: word })
    })
  }
  const OnDelete = (index: number) => {
    setData(data.filter((_, idx) => idx !== index))
  }
  const OnEdit = () => {
    setIsEditing(true)
    
  }
  const onSave = () => {
    setIsEditing(false)
  }
  const OnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <div className="container">
      <div className="flex  m-6">
        {isEditing ? (
          <div className='flex justify-between'>
            <input
              className="bg-red-200 mr-5 rounded h-12"
              value={input}
              onChange={OnchangeInput}
            />
            <button className=" bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={onSave}>
              Save
            </button>
          </div>
        ) : (
          <div className='flex justify-between'>
            <span className=" mr-72"> {input} </span>
            <button className=" bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={OnEdit}>
              Edit
            </button>
          </div>

          // eslint-disable-next-line react/jsx-no-comment-textnodes
        )}
      </div>

      <input className="bg-green-200 " value={word} onChange={Onchange} />
      <button className="ml-5 rounded shadow-md" onClick={OnAddItem}>
        ADD ITEM
      </button>
    </div>
  )
}

export default ShopRow
