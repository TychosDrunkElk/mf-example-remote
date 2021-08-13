import Image from 'next/image';
import {useState} from 'react';
export default function BizBirds() {
  const [birdClapCount, setBirdClapCount] = useState(0);

  return <>
    <button onClick={() => setBirdClapCount(birdClapCount + 1)}>👏👏👏</button>
    <Image src={'https://i.imgur.com/qm8Ztdw.gif'} alt="birds doin biz" width="500" height="281"/>
    {'👏'.repeat(birdClapCount)}
  </>
}