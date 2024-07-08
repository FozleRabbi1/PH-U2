import MainLayout from "./components/layOut/MainLayout";
import ProtectedRoute from "./components/layOut/ProtectedRoute";

function App() {
  return (
    <div>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </div>
  );
}

export default App;
