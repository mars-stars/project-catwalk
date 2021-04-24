import React, { useState, useEffect } from 'react';

import Ratings from './Ratings';
import Reviews from './Reviews';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData';
import { getReviews, getReviewMetadata } from '../../../helpers/api';

const RatingsAndReviews = (props) => {
  const { productId } = props;
  const [reviewList, setReviewList] = useState([...sampleData.reviewList.results]);
  const [reviews, setReviews] = useState([...sampleData.reviewList.results]);
  const [reviewData, setReviewData] = useState({ ...sampleData.reviewMetaData });
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    getReviewMetadata(productId)
      .then((reviewsMeta) => setReviewData({ ...reviewsMeta }))
      .then(() => getReviews(productId, sortBy))
      .then((reviewsData) => {
        setReviewList([...reviewsData]);
        setReviews([...reviewsData]);
      });
  }, [productId, sortBy]);

  return (
    <div id="ratings-reviews">
      <h1>Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings
          reviewData={reviewData}
          reviewList={reviewList}
          setReviewList={setReviews}
        />
        <Reviews reviewsList={reviews} setSortBy={setSortBy} />
      </div>
    </div>
  );
};

export default RatingsAndReviews;
