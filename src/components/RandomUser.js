import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchRandomData = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => {
      // handle success
      console.log(data);
      return data;
    })
    .catch((err) => {
      // handle error
      console.log(err);
    });
};

const getFullUserName = (user) => {
  const {
    name: { first, last },
  } = user;
  return `${first} ${last}`;
};

const RandomUser = () => {
  const [randomUserData, setRandomUserData] = useState('');
  const [userInfos, setUserInfos] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomUserData) => {
      if (randomUserData === undefined) return;
      const newUserInfos = [...userInfos, ...randomUserData.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(randomUserData.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='cushion'>
      <h1>Get Random User</h1>
      {userInfos.map((user, idx) => (
        <div key={idx}>
          <p>{getFullUserName(user)}</p>
          <img src={user.picture.thumbnail} alt='' />
        </div>
      ))}
      {/* <pre>{randomUserData}</pre> */}
      <button onClick={fetchNextUser}>Fetch Next User</button>
    </div>
  );
};

export default RandomUser;
