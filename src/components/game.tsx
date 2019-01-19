import React from 'react';
import _ from 'lodash';

interface IProps {
    size: number
}

interface IState {
    winnerIndex: number,
    score: number,
}

export default class GameComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            winnerIndex: _.random(props.size - 1),
            score: 0,
        }
    }

    onClick(idx: number) {
        let score = this.state.score;

        if (idx === this.state.winnerIndex) {
            score += 10;
        } else {
            score -= 5;
        }
        this.setState(oldState => ({
            winnerIndex: _.random(this.props.size - 1),
            score,
        }))
    }

    render() {
        const { size } = this.props;
        const { winnerIndex, score } = this.state;

        return (
            <div>
            <p>Score: {score}</p>
            <div className='container'>
                {
                    _.range(size).map(idx => (
                        <div
                            className={`square ${idx === winnerIndex ? 'winner' : ''}`}
                            onClick={(_ev) => this.onClick(idx)}
                        >
                        </div>
                        ))
                }
            </div>
            </div>
        )
    }
}