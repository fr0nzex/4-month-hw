import AboutUs from "../AboutUs/AboutUs";



 function MainPage () {
    
    const WorldCup = {
        Title: "WorldCup",
        teams: 32,
        winner: "ARGENTINA",

    }
    
    
    
       return(
           <>
           <AboutUs AboutUs={WorldCup}/>
           </>
       )
   }
   
   export default MainPage;