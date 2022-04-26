import React from "react"
import type { ChangeEvent, MouseEvent } from "react"
import { AppConfig } from "../config"

export const MailList = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>("")
    const [emailWasFocused, setEmailWasFocused] = React.useState<boolean>(false)
    const emailInputRef = React.useRef<HTMLInputElement>(null)

    const emailInputWidth = email ? `${email.length}.3ch` : "2ch"

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value.trim())
        setEmailWasFocused(true)
    }
    
    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        if (!emailInputRef.current) {
            return
        }
        const clickedElement = e.target as HTMLElement
        if (!clickedElement) {
            return
        }

        setEmailWasFocused(true)

        const clickedElementClass = clickedElement.getAttribute("class")
        if (clickedElementClass === "mail-list__terminal__email-input") {
            return //the browser is already managing the focus on the input :-)
        }
        emailInputRef.current.focus()
    }

    const emailInputAdditionalClass: string = emailWasFocused ? "mail-list__terminal__email-input-with-content" : ""

    return (
        <section className="container">
            <div className="mail-list" onClick={onClick}>
        
            </div>
        </section>
    )
}
