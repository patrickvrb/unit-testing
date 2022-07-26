import React from 'react'

const useAuth = (timeout = 1500) => {
    return new Promise<boolean>((resolve) => setTimeout(() => resolve(true), timeout))
}

export default useAuth