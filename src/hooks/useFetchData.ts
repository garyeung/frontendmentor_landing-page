import { useEffect, useState } from "react";

export default function useFetchData<T>(fetcher: ()=> Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    const fetchData = async () => {
        try {
           setLoading(true); 
           const fetched = await fetcher()
           setData(fetched);

        } catch (err) {
            setError(err as Error)
        } finally {
          setLoading(false)
        }
    }

    fetchData()
  }, [fetcher])

  return {data, loading, error}
}