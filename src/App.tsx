import { QueryClientProvider } from 'react-query'
import router, { queryClient } from './routes'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App
