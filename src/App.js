import { Route, Routes } from "react-router-dom";
import Home from "./screens/homepage/Home";
import SignInForm from "./components/homepage/SignInForm";
import SignUpForm from "./components/homepage/SignUpForm";
import Movies from "./components/homepage/Movies";
import AdminHome from "./screens/admin/AdminHome";
import Footer from "./components/homepage/Footer";
import MovieDetails from "./components/homepage/MovieDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
