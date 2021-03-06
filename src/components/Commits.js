import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Button, DatePicker, Divider, PageHeader, Space, Table} from "antd";
import moment from 'moment'
import {commitsEndpoint} from "../util/Const";
import Layout, {Content} from "antd/es/layout/layout";

const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

function Commits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [dateSince, setDateSince] = useState(moment().startOf('month').toISOString());
    const [dateUntil, setDateUntil] = useState(moment().toISOString());
    const history = useHistory();
    const columns = [
        {
            title: 'Commit message',
            dataIndex: ['commit','message'],
            render: text => <span>{text}</span>,
        },
        {
            title: 'Author',
            dataIndex: ['commit','author','name']
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type={'link'} onClick={() => seeMoreDetails(record)}>See details</Button>
                </Space>
            ),
        },
    ];

    function getCommitList() {
        let apiEndpoint = commitsEndpoint;
        apiEndpoint += '&since' + dateSince + '&until' + dateUntil
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getCommitList();
    }, [dateUntil])

    function seeMoreDetails(data) {
        history.push('/commit', {
            commitData: data,
        })
    }

    function onDateChange(dates, dateStrings) {
        if (dates) {
            console.log('From: ', dates[0].toISOString(), ', to: ', dates[1].toISOString());
            setDateSince(dates[0]);
            setDateUntil(dates[1])
        } else {
            setDateSince(moment().startOf('month').toISOString());
            setDateUntil(moment().toISOString());
        }
    }

    return (
        <div>
            <PageHeader title="Commit list"/>
            <Content style={{padding: 24, margin: 0, minHeight: 280,}}>
                <Space direction="vertical" size={12}>
                    <label>Date filter</label>
                    <RangePicker
                        defaultValue={[moment(moment().startOf('month').format(dateFormat), dateFormat),
                            moment(moment().format(dateFormat), dateFormat)]}
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                        }}
                        onChange={onDateChange}
                        format={'DD/MM/YYYY'}
                        allowClear={false}
                    />
                </Space>
                <Divider />
                <Table columns={columns} pagination={{ position: ['bottomRight'] }} dataSource={items}/>
            </Content>

        </div>
    );
};

export default Commits;