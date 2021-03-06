import React from "react";
import { useHistory } from "react-router-dom";

function Commit(props) {
    const history = useHistory();
    if(!props.location.state){
        history.push('/commits');
    }
    const commitData = props.location.state.commitData;
    return (
        <div>
            <div>
                {commitData.commit.message}
            </div>
            <div>
                {commitData.commit.author.name}
            </div>
            <div>
                {commitData.commit.author.date}
            </div>
        </div>
    );
}

export default Commit;