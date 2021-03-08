import React from 'react'
import * as PropTypes from 'prop-types'
import PlayingCard from './PlayingCard'

/**
 * A <Hand/> of <PlayingCard/>'s
 * @param {string} size - 1x - 8x
 * @param {string} margin - 1x - 8x - if no margin provided, default to size
 */
export default function Hand (props) {
    return <div>
        {
            props.children.map((child) => {
                let size = props.size
                let margin = props.margin

                if (typeof size === 'undefined') {
                    size = 'small'
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
    children: PropTypes.arrayOf(PropTypes.instanceOf(PlayingCard)),
    size: PropTypes.string,
    margin: PropTypes.string,
    layout: PropTypes.string,
}
