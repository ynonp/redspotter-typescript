import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

const el = document.querySelector('#game');
ReactDOM.render(<Game size={9} />, el);
