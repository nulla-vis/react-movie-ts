import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';
// Types
type Props = {
    movieTitle: string;
}

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => {

    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{ movieTitle }</span>
            </Content>
        </Wrapper>
    );
};

BreadCrumb.prototype = {
    movieTitle: PropTypes.string
};

export default BreadCrumb;