import React from "react"
import { Root } from "./context"

const wrapPageElement = ({ element, props }) => (
  <Root {...props}>{element}</Root>
)

export { wrapPageElement }
