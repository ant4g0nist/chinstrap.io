// One setting per line: makes it easy to replace a setting at deployment time with a `sed` command
// (note that we could also rely on `process.env` and env vars prefixed with `NEXT_PUBLIC_`)
export const AppConfig = {
    fathom: {
        trackingCode: process.env["NEXT_PUBLIC_FATHOM_TRACKING_CODE"] || "",
        includedDomains: (process.env["NEXT_PUBLIC_FATHOM_INCLUDED_DOMAINS"] || "").split(","),
    },
    
    chinstrap: {
        urls: {
            twitter: "https://twitter.com/ant4g0nist",
            github: "https://github.com/ant4g0nist/chinstrap",
            telegram: "https://t.me/chinstrap_io",
        },
    },
}
