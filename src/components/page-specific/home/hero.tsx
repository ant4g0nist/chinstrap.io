import React from "react"
import Link from "next/link"
import { trackEvent } from "../../../services/frontend/analytics"
import { Terminal } from "../../terminal"

interface HeroProps {
    videoUrl: string
}

export const Hero = (props: HeroProps): JSX.Element => {
    const ReadMoreLink = (
        <Link href="/about">
            <a
                className="button button--hero"
                onClick={(_e) => {
                    trackEvent("A2PINPR4")
                }}
            >
                Read more&hellip;
            </a>
        </Link>
    )

    return (
        <section className="container hero">
            <div className="hero__text">
                <h1 className="hero__headline">
                    <span className="u-no-wrap">
                        We love Tezos
                        <span className="hero__cursor" />
                    </span>
                </h1>
                <p className="hero__desc">
                    With Chinstrap, building on Tezos has become more <strong>powerful</strong> and <strong>cuter</strong> than before
                </p>
                {ReadMoreLink}
            </div>
            <div className="hero__terminal-wrapper">
                <div className="hero__terminal-animation">
                    <div className="hero__terminal">
                        <div className="hero__terminal-back-layout" />
                        
                        <Terminal
                            videoUrl={props.videoUrl}
                            initialInView={true}
                            tabName="Chinstrap"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
