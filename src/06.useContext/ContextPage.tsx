import ThemeContent from "./ThemeContent";
import NavBar from "./NavBar";
import { ThemeProvider } from "./context/ThemeProvider";
// 올바른 예
export default function ContextPage() {
    return (
      <ThemeProvider>
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <NavBar/>
            <main className="flex-1">
                <ThemeContent/>
            </main>
        </div>
        
      </ThemeProvider>
    );
  }
  