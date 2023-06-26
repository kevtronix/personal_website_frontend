// Purpose: Home page component for the application.
import './Utilities.css';
import { Construction } from "@mui/icons-material";
function HomePage() {
    return (
        <div> 
            <Construction style={ {fontSize: 500}} className="center-item"/>
            <p>Work in progress. Please check back later.</p>
        </div> 
    )
}

export default HomePage;