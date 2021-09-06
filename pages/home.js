import MainView from "../components/dashboard/mainview";
import Dashboard from "../components/dashboard/dashboard";






export default function  Home(){
    
    return (
        <div>

            <Dashboard pageName={"home - dashboard"}>{
                
                <MainView  displayName={"blabla"}></MainView>
            }</Dashboard>
        </div>

    )
}




