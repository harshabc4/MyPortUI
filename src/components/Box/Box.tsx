import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface BoxProps {}

const Box: FC<BoxProps> = () => {
   const [feeds, setFeedsData] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios
               // .get("/showMaterials")
               // .get("/getPosts")
               .get("http://localhost:2121/getPosts")
               // .then((res) => setFeedsData(res))
               .then((res) => {
                  console.log(res.data);
                  console.log("this is materials from appjs frontend socialmedia");
                  // return res.data;
                  setFeedsData(res.data);
               });

         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);
  return (
      <div>adsf</div>
  );
};

export default Box;
