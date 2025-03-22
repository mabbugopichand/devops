import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Channels = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/channels');
        setChannels(response.data);
      } catch (error) {
        console.error('Failed to fetch channels:', error);
      }
    };
    fetchChannels();
  }, []);

  return (
    <div>
      <h2>Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel._id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
