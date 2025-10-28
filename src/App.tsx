import RoutePage from "@/routes/Route.page"
import AuthProvider from "@/context/AuthContext"

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function App() {
  
  return (
    <AuthProvider>
      <RoutePage />
    </AuthProvider>
  )
}

export default App
