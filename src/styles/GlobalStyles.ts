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
        --secondary: #15181C;
        --search: #202327;
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --red: #E8265E;
        --twitter: #33A1F2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
    }
`;