import React from "react";

function Commit(props) {
    return (
        <div>
            <h2>{props.data.commit.message}</h2>
        </div>
    );
}

export default Commit;