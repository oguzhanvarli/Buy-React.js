import React, { useEffect, useState } from 'react'
import { baseService } from '../../network/services/baseService'

function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        baseService.get(url).then(data => {
            setData(data)
            setIsLoading(false)
        })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [])

    return { data, isLoading, error }
}

export default useFetch