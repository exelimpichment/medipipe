
"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"


export default function TanQueryClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 4 * 1000,
            refetchInterval: 4 * 1000,
          },
        },
      })
  )

  return (

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
        //  initialIsOpen={false} 
          />
        {children}
      </QueryClientProvider>

  )
}
