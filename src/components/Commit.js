import React from "react";

function Commit(props) {
    const commit = props.data.commit;
    debugger
    return (
        <div>
            <h1>
                {commit.message.split("\n").map((msg,key) => {
                    return <span key={key}>{msg}&nbsp;</span>;
                })}
            </h1>
        </div>
    );
}

export default Commit;