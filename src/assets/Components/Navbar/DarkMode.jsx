import React from 'react';
import { CgDarkMode } from 'react-icons/cg';



const DarkMode = () => {
  
    const [theme, setTheme] = React.useState(
       localStorage.getItem('theme')? localStorage.getItem("theme") : "light" 
    );

    const element = document.documentElement; //element Html

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    } , [theme])
    

    return (
    <div>
        <CgDarkMode 
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         className={'w-12 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}'}
        />
    </div>
    );
};

export default DarkMode