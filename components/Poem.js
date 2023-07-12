'use client';
import { useState, useEffect } from 'react';

const Poem = () => {
  const jinrishici = require('jinrishici');
  const [poem, setPoem] = useState('');
  useEffect(() => {
    jinrishici.load((result) => setPoem(result.data.content));
  }, []);
  return <p className="font-serif">{poem}</p>;
};

export default Poem;
