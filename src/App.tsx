import RoutePage from "@/routes/Route.page"
import AuthProvider from "@/context/AuthContext"

function App() {
  
  return (
    <AuthProvider>
      <RoutePage />
    </AuthProvider>
  )
}

export default App
