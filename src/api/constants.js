const envUrl = import.meta.env.VITE_API_URL;
const envApiKey = import.meta.env.VITE_API_KEY;
var headers =
    {
        "apikey": envApiKey,
        "Authorization":`Bearer ${envApiKey}`
    };

export const URL = envUrl;
export const CONFIG = { headers: headers };