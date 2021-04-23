import { shallow } from 'enzyme';
import React from 'react';

import Ratings from '../client/src/components/Ratings';
import RatingsSummary from '../client/src/components/RatingsSummary';
import ProductBreakdown from '../client/src/components/ProductBreakdown';
import RatingsBreakdown from '../client/src/components/RatingsBreakdown';
import sampleData from '../helpers/sampleData';

test('renders Ratings component', () => {
  const reviewData = sampleData.reviewMetaData;
  const reviewList = sampleData.reviewList.results;
  const wrapper = shallow(
    <Ratings reviewData={reviewData} reviewList={reviewList} />,
  );
  expect(wrapper.contains(<RatingsSummary rating={2.5} />)).toEqual(true);
  expect(wrapper.contains(
    <RatingsBreakdown reviews={reviewList} recommend={33.3} />,
  )).toEqual(true);
  expect(wrapper.contains(
    <ProductBreakdown characteristics={reviewData.characteristics} />,
  )).toEqual(true);
});
