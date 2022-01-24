import React from 'react';
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
    return (
        <React.Fragment>
            <UserSearch />
            <UserResults />
        </React.Fragment>
    );
};

export default Home;
