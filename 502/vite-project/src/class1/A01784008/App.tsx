import ES6Hw from "./ES6_Tarea.tsx";
import LoginPage from "./LoginPage.tsx";
import Navbar from "../../class2/A01784008/components/NavbarLB.tsx";
import "/src/App.css"
import "../../class2/A01784008/App.tsx"

const  App=()=>{
    return(
        <div>
        <Navbar />
        <ES6Hw></ES6Hw>
        <LoginPage></LoginPage>
        </div>
    );
};

export default App;