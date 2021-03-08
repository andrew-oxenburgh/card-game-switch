import React from 'react'

import PlayingCard from '../components/PlayingCard'

export default {
    title: 'card-game-switch/PlayingCard',
    component: PlayingCard,
}

const Template = (args) => <PlayingCard {...args} />

export const SingleCard = Template.bind({})
SingleCard.args = {
    suit: 'h',
    faceValue: 'a',
    back: 0,
}
