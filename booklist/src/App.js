import BookContextProvider, {BookContext} from "./Contexts/BookContext";
import Navbar from "./Components/Navbar"
import BookList from "./Components/BookList";
import BookForm from "./Components/Bookform";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
