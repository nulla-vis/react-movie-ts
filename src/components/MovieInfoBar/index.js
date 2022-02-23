import React from "react";
import PropTypes from "prop-types";
// Helpers
import { calcTime, convertMoney } from '../../helpers';

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles'

const MovieInfobar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: { calcTime(time) }</p>
            </div>
            <div className="column">
                <p>Budget: { convertMoney(budget) }</p>
            </div>
            <div className="column">
                <p>Running time: { convertMoney(revenue) }</p>
            </div>

        </Content>
    </Wrapper>
);

MovieInfobar.prototype = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfobar;