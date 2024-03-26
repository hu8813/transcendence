import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios"; // Import Axios for making HTTP requests
import "./index.css";
import App from "./App";
import i18n from "./i18n";
import reportWebVitals from "./reportWebVitals";

const LanguageInitializer = () => {
  useEffect(() => {
    // Function to wake up the backend server
    const wakeUpBackend = async () => {
      try {
        // Define the URL of your Django backend's ping endpoint
        const pingURL = "https://pong42.azurewebsites.net/ping/";

        // Send an HTTP GET request to the ping endpoint
        const response = await axios.get(pingURL);

        // Log the response message to the console
        console.log(response.data.message);
      } catch (error) {
        // Log any errors to the console
        console.error("Error waking up server:", error);
      }
    };

    // Call the function to wake up the backend when the component mounts
    wakeUpBackend();

    // Load the language from local storage
    const storedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(storedLanguage || "en");
  }, []);

  return null; // The LanguageInitializer component doesn't render anything
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageInitializer />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
