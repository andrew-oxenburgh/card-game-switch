import React from 'react'

import Hand from '../components/Hand'
import PlayingCard from '../components/PlayingCard'

export default {
    title: 'card-game-switch/Hand - two card',
    component: Hand,
}

const Template = (args) => {
    return (
        <Hand {...args}>
            <PlayingCard/>
        </Hand>
    )
}

export const OneCardHand = Template.bind({})
