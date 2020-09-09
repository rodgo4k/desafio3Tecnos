import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--secondary);
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        
        max-height: 100vh;
        max-width: 100vw;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    }

    html {
        background: var(--primary);
    }

    :root {
        font-size: 60%;
        
        --primary: #EEEEEE;
        --red: #E8265E;
        --darkred: #FF0040;
        --green: #77DD77;
        --orange: #FFA530;
        --blue: #007FF9;
        --gray: #D7D7D7;
        --darkgray: #333333;
        --darkergray: #474A51;
    }
`;