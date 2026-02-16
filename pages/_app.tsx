import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { AppProps } from "next/app"
import { CourseProvider } from "@/context/CourseContext"
import "@/app/globals.css"

export default function MyApp({ Component, pageProps }: AppProps){
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <CourseProvider>
                <Component {...pageProps} />
            </CourseProvider>
        </QueryClientProvider>
    )
}
