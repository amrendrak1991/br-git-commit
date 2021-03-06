import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {DatePicker, Space} from "antd";
import moment from 'moment'

const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

function Commits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [dateSince, setDateSince] = useState(moment().startOf('month').toISOString());
    const [dateUntil, setDateUntil] = useState(moment().toISOString());
    const history = useHistory();

    function getCommitList() {
        let apiEndpoint = "https://api.github.com/repos/amrendrak1991/br-git-commit/commits?per_page=100&sha=fd0db9583d99b4c6c3fcb9045969952bc4add991";
        apiEndpoint += '&since' + dateSince + '&until' + dateUntil
        /*fetch(apiEndpoint)
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
            )*/
        setItems([
            {
                "sha": "fd0db9583d99b4c6c3fcb9045969952bc4add991",
                "node_id": "MDY6Q29tbWl0MzQ1MDM0NjcyOmZkMGRiOTU4M2Q5OWI0YzZjM2ZjYjkwNDU5Njk5NTJiYzRhZGQ5OTE=",
                "commit": {
                    "author": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:40:05Z"
                    },
                    "committer": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:40:05Z"
                    },
                    "message": "adds commit component\nadds commits component\nthis commit is to test multi-line commit formats",
                    "tree": {
                        "sha": "d630edaa5d3ac1b06e5de8fc6f654e05b8f9fe26",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/trees/d630edaa5d3ac1b06e5de8fc6f654e05b8f9fe26"
                    },
                    "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/commits/fd0db9583d99b4c6c3fcb9045969952bc4add991",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/fd0db9583d99b4c6c3fcb9045969952bc4add991",
                "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/fd0db9583d99b4c6c3fcb9045969952bc4add991",
                "comments_url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/fd0db9583d99b4c6c3fcb9045969952bc4add991/comments",
                "author": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                        "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/e2aeedcf1a46692100d93da0e3a98c09a63028ac"
                    }
                ]
            },
            {
                "sha": "e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                "node_id": "MDY6Q29tbWl0MzQ1MDM0NjcyOmUyYWVlZGNmMWE0NjY5MjEwMGQ5M2RhMGUzYTk4YzA5YTYzMDI4YWM=",
                "commit": {
                    "author": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:38:10Z"
                    },
                    "committer": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:38:10Z"
                    },
                    "message": "adds commit component\nadds commits component\nthis commit is to test multi-line commit formats",
                    "tree": {
                        "sha": "c2403a45cf37177c0c4be36367f29677e9a7af50",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/trees/c2403a45cf37177c0c4be36367f29677e9a7af50"
                    },
                    "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/commits/e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/e2aeedcf1a46692100d93da0e3a98c09a63028ac",
                "comments_url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/e2aeedcf1a46692100d93da0e3a98c09a63028ac/comments",
                "author": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "dee5a797c38127d852543d76bce59529e3940636",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/dee5a797c38127d852543d76bce59529e3940636",
                        "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/dee5a797c38127d852543d76bce59529e3940636"
                    }
                ]
            },
            {
                "sha": "dee5a797c38127d852543d76bce59529e3940636",
                "node_id": "MDY6Q29tbWl0MzQ1MDM0NjcyOmRlZTVhNzk3YzM4MTI3ZDg1MjU0M2Q3NmJjZTU5NTI5ZTM5NDA2MzY=",
                "commit": {
                    "author": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:20:14Z"
                    },
                    "committer": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T08:20:14Z"
                    },
                    "message": "adds basic routes with initial api call handling",
                    "tree": {
                        "sha": "a01db9a1d5d0671b99ab436606c569e6167aa5f3",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/trees/a01db9a1d5d0671b99ab436606c569e6167aa5f3"
                    },
                    "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/commits/dee5a797c38127d852543d76bce59529e3940636",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/dee5a797c38127d852543d76bce59529e3940636",
                "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/dee5a797c38127d852543d76bce59529e3940636",
                "comments_url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/dee5a797c38127d852543d76bce59529e3940636/comments",
                "author": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                        "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f"
                    }
                ]
            },
            {
                "sha": "b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                "node_id": "MDY6Q29tbWl0MzQ1MDM0NjcyOmI1YTBhNzMyNzFhZTdjZDEwZWJkZDg3YTNlOGE4MWI4ZGU2OThlN2Y=",
                "commit": {
                    "author": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T07:38:25Z"
                    },
                    "committer": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T07:38:25Z"
                    },
                    "message": "First commit",
                    "tree": {
                        "sha": "8422d6b8bbb77151134ab8aefeee88c28c987689",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/trees/8422d6b8bbb77151134ab8aefeee88c28c987689"
                    },
                    "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/commits/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f",
                "comments_url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/b5a0a73271ae7cd10ebdd87a3e8a81b8de698e7f/comments",
                "author": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "9dbda16fc464f55e86a6352120743c53b8a13ad1",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/9dbda16fc464f55e86a6352120743c53b8a13ad1",
                        "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/9dbda16fc464f55e86a6352120743c53b8a13ad1"
                    }
                ]
            },
            {
                "sha": "9dbda16fc464f55e86a6352120743c53b8a13ad1",
                "node_id": "MDY6Q29tbWl0MzQ1MDM0NjcyOjlkYmRhMTZmYzQ2NGY1NWU4NmE2MzUyMTIwNzQzYzUzYjhhMTNhZDE=",
                "commit": {
                    "author": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T07:30:41Z"
                    },
                    "committer": {
                        "name": "Amrendra",
                        "email": "amrendra.k1991@gmail.com",
                        "date": "2021-03-06T07:30:41Z"
                    },
                    "message": "Initialize project using Create React App",
                    "tree": {
                        "sha": "b14ac6c5a58da7feddc415e08f07a51695d40d6c",
                        "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/trees/b14ac6c5a58da7feddc415e08f07a51695d40d6c"
                    },
                    "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/git/commits/9dbda16fc464f55e86a6352120743c53b8a13ad1",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/9dbda16fc464f55e86a6352120743c53b8a13ad1",
                "html_url": "https://github.com/amrendrak1991/br-git-commit/commit/9dbda16fc464f55e86a6352120743c53b8a13ad1",
                "comments_url": "https://api.github.com/repos/amrendrak1991/br-git-commit/commits/9dbda16fc464f55e86a6352120743c53b8a13ad1/comments",
                "author": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "amrendrak1991",
                    "id": 12970211,
                    "node_id": "MDQ6VXNlcjEyOTcwMjEx",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12970211?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/amrendrak1991",
                    "html_url": "https://github.com/amrendrak1991",
                    "followers_url": "https://api.github.com/users/amrendrak1991/followers",
                    "following_url": "https://api.github.com/users/amrendrak1991/following{/other_user}",
                    "gists_url": "https://api.github.com/users/amrendrak1991/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/amrendrak1991/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/amrendrak1991/subscriptions",
                    "organizations_url": "https://api.github.com/users/amrendrak1991/orgs",
                    "repos_url": "https://api.github.com/users/amrendrak1991/repos",
                    "events_url": "https://api.github.com/users/amrendrak1991/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/amrendrak1991/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": []
            }
        ])
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
            //clear state
            setDateSince(moment().startOf('month').toISOString());
            setDateUntil(moment().toISOString());
        }
    }

    return (
        <div>
            <h2>Commit list</h2>
            <Space direction="vertical" size={12}>
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
            {items.length && items.map((data) => {
                return <div>
                    {data.commit.message.split("\n").map((msg, key) => {
                        return <span key={key}>{msg}&nbsp;</span>;
                    })}
                    <button onClick={() => seeMoreDetails(data)}>See details</button>
                </div>
            })}
        </div>
    );
};

export default Commits;