import React from 'react'

import PlayingCard from '../components/PlayingCard'

export default {
    title: 'card-game-switch/PlayingCard',
    component: PlayingCard,
    argTypes: {
        suit: {
            description: 'Choose suit. Hearts, Spades, Diamonds or Clubs',
            default: 'd',
            control: {
                type: 'select',
                options: [
                    'hearts',
                    'spades',
                    'diamonds',
                    'clubs',
                ],
            },
        },
        back: {
            description: 'show back of card, and what colour',
            control: false,
        },
    },
}

const Template = (args) => {
    return (<PlayingCard {...args} />)
}

export const SingleCard = Template.bind({})
