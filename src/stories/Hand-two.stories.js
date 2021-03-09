import React from 'react'

import Hand from '../components/Hand'
import PlayingCard from '../components/PlayingCard'

export default {
    title: 'card-game-switch/Hand - one card',
    component: Hand,
}

const Template = (args) => {
    return (
        <Hand {...args}>
            <PlayingCard/>
            <PlayingCard/>
        </Hand>
    )
}

export const TwoCardHand = Template.bind({})
