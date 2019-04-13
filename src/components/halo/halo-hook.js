import React from 'react';
import { useRefGroups } from 'react-ref-groupie';

import './halo.scss'

const HaloHook = () => {
  const [
    {
      circles: {
        halo
      }
    }
  ] = useRefGroups({
    circles: 'halo'
  });

  return <div ref={halo} className="halo" />
};

export default HaloHook;
