import { useEffect } from 'react'

export default function useKeyPress(handler) {
  useEffect(() => {
    window.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [])
}
