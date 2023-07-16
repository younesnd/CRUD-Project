import { useImmer } from 'use-immer';
import { useCallback } from 'react'
export const useToggleState = (defaultValue = false) => {
  const [state, setState] = useImmer(defaultValue)

  const open = useCallback(() => setState(true), [])

  const close = useCallback(() => setState(false), [])
  
  const toggle = useCallback(() => setState((state) => !state), [])
  return {
    state,
    open,
    close,
    toggle,
  }
}
