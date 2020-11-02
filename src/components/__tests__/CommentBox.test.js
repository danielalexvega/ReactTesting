import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CommentBox />);
})

// beforeEach(() => {
//   wrapper = mount(<CommentBox />);
// })

// afterEach(() => {
//   wrapper.unmount();
// })

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapper.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value'))
      .toEqual('new comment');
  });

  it('has an empty textarea after the input is submitted', () => {
    // submit the form
    wrapper.find('form').simulate('submit');
    wrapper.update();  //force component to update
    expect(wrapper.find('textarea').prop('value'))
      .toEqual('');
  });
});

