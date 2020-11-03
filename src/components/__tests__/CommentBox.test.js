import React from 'react';
import { mount } from '@wojtekmaj/enzyme-adapter-react-17';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

// beforeEach(() => {
//   wrapper = shallow(<CommentBox />);
// })

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
})

afterEach(() => {
  wrapper.unmount();
})

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

