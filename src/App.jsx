import Feed from "./pages/Feed";
import { GlobalStyles } from "./styles/global";
import { GlobalReset } from "./styles/reset";

function App() {
    
    return (
        <div className="App" >
            <GlobalReset/>
            <GlobalStyles/>
            <Feed/>

        </div>
    )
}

export default App;