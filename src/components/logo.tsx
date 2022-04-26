import React from "react"

interface Props {
    isFooter?: boolean
}
export const Logo = ({ isFooter }: Props) => (
    <>
        <img src="img/chinstrap.png" height='50'></img>
    </>
)
