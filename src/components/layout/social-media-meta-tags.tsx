import React from "react"

// Shared content
const TITLE = `Chinstrap.io`
const DESCRIPTION = `With Chinstrap, building on Tezos has become more powerful and cuter than before`
const IMAGE_URL = "/img/logo.png"
const SITE_URL = "https://chinstrap.io/"
// Twitter-specific stuff
const TWITTER_SITE = "@ant4g0nist"
// OpenGraph-specific stuff
const OPENGRAPH_TYPE = "website"

export function SocialMediaMetaTags(): JSX.Element {
    // Basically modeled after `view-source:https://github.com/Textualize/rich` ^_^

    return (
        <>
            {/* Let's start with Twitter-specific tags...*/}
            {/* @link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
            <meta name="twitter:image:src" content={IMAGE_URL} />
            <meta name="twitter:site" content={TWITTER_SITE} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={TITLE} />
            <meta name="twitter:description" content={DESCRIPTION} />
            {/* And now for the OpenGraph tags...*/}
            {/* @link https://ogp.me/ */}
            <meta property="og:image" content={IMAGE_URL} />
            <meta property="og:image:alt" content={DESCRIPTION} />
            <meta property="og:type" content={OPENGRAPH_TYPE} />
            <meta property="og:title" content={TITLE} />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:description" content={DESCRIPTION} />
        </>
    )
}
