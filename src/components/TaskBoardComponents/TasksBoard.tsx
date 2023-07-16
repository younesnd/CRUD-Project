import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import { boardData } from '@/boardData'

type TasksBoardProps = {}

const TasksBoard = (props: TasksBoardProps) => {
  const [board, setBoard] = useImmer(boardData)
  const [selectedTask, setSelectedTask] = useState<{
    columnIdx: number
    taskIdx: number
  }>()

  const onSelectTask = (columnIdx: number, taskIdx: number) => {
    setSelectedTask({columnIdx,taskIdx})}

  const onTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedTask) return
    const { columnIdx, taskIdx } = selectedTask

    setBoard((board) => {
      board.columns[columnIdx].tasks[taskIdx].name = e.target.value
    })
  }

  return (
    <div className="p-8">
      <header className="flex items-center text-2xl text-white rounded bg-green-600">
        Developers
      </header>
      <div className="p-4 mb-6 grid grid-cols-4 bg-green-50">
        {board.columns.map((column, columnIdx) => {
          return (
            <div>
              <h3 id='columnIdx'
               className="font-semibold mb-3">{column.name}</h3>

              {column.tasks.map((task, taskIdx) => {
                return (
                  <button id="ta"
                   className={`border border-gray-200 p-3 w-full ${
                          columnIdx === selectedTask?.columnIdx &&
                          taskIdx === selectedTask?.taskIdx
                            ? 'bg-green-700 text-green-100'
                            : ''
                        }`} onClick={() => onSelectTask(columnIdx, taskIdx)}>
                    {task.name}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
      
      <div>
          <h2 className="font-semibold mb-4 flex text-left">
            {selectedTask ? 'Update task' : 'Select task'}
          </h2>
          {selectedTask ? (
            <input
            className="flex"
              type="text"
              value={
                board.columns[selectedTask.columnIdx].tasks[
                  selectedTask.taskIdx
                ].name
              }
              onChange={onTaskNameChange}
            />
          ) : null}
        </div>
    </div>
  )
}
export default TasksBoard