import React from 'react';
import { shallow } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = shallow(
    <Root initialState={initialState}>
      <CommentList />
    </Root>);
});

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});