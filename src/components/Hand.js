import React from 'react'
import * as PropTypes from 'prop-types'

/**
 * A <Hand/> of <PlayingCard/>'s
 * @param {object} props
 * @param {string} size - 1x - 8x
 * @param {string} margin - 1x - 8x - if no margin provided, default to size
 */
export default function Hand (props) {
    let { children } = props
    if (!children.map) {
        children = [children]
    }
    return <div>
        {
            children.map((child) => {
                let size = props.size
                let margin = props.margin

                if (typeof size === 'undefined') {
                    size = 'sm'
                }
                if (typeof margin === 'undefined') {
                    margin = size
                }
                return React.cloneElement(child, { size, margin })
            })
        }
    </div>
}

Hand.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(Hand),
    ]),
    size: PropTypes.string,
    margin: PropTypes.string,
    layout: PropTypes.string,
}
