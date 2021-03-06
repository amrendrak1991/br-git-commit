import React from "react";
import {useHistory} from "react-router-dom";
import {Descriptions, Divider, PageHeader, Space} from "antd";
import {Content} from "antd/es/layout/layout";

function Commit(props) {
    const history = useHistory();
    if (!props.location.state) {
        history.push('/commits');
    }
    const commitData = props.location.state.commitData;
    return (
        <div>
            <PageHeader onBack={() => history.push('/commits')} title="Commit Details" subTitle={commitData.sha}/>
            <Divider/>
            <Content style={{padding: 24, margin: 0, minHeight: 280,}}>
                <Space direction="vertical" size={12}>
                    <Descriptions bordered>
                        <Descriptions.Item label="Message">{commitData.commit.message}</Descriptions.Item>
                        <Descriptions.Item label="Author Name">{commitData.commit.author.name}</Descriptions.Item>
                        <Descriptions.Item label="Author Email">{commitData.commit.author.email}</Descriptions.Item>
                        <Descriptions.Item label="Commit Link">
                            <a target={'_blank'} href={commitData.commit.url}>Click to open</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Comment Count">{commitData.commit.comment_count}</Descriptions.Item>
                        <Descriptions.Item label="Comment Link">
                            <a target={'_blank'} href={commitData.comments_url}>Click to open</a>
                        </Descriptions.Item>
                    </Descriptions>
                </Space>
            </Content>
        </div>
    );
}

export default Commit;