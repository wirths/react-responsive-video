import React from 'react'
import Video from '../src'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'

describe('ReactVideo', () => {
  describe('Tag "video"', () => {
    test('Video component with mp4', () => {
      const component = renderer.create(
        <Video mp4="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    
    test('Video component with ogg', () => {
      const component = renderer.create(
        <Video ogg="http://techslides.com/demos/sample-videos/small.ogv" />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    
    test('Video component with webm', () => {
      const component = renderer.create(
        <Video webm="http://techslides.com/demos/sample-videos/small.webm" />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    
    test('Video component with HTTP streaming', () => {
      const component = renderer.create(
        <Video m3u8="https://player.vimeo.com/external/375031697.m3u8?s=326616eb51bb4e8c17bc634da4fd784c2a700c9e" />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    
   

    test('Video component with responsive wrapper and mp4', () => {
      //const breakpoints = [40,50,60,70].map(n => n + 'em')
      const component = renderer.create(
        <Video 
          mp4="http://techslides.com/demos/sample-videos/small.mp4"
          height={[400,480,600,760].map(n => n + 'px')}
        />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  }),
  describe('Tag "iframe"', () => {
    test('Video component with Vimeo', () => {
      const component = renderer.create(
        <Video vimeo="https://vimeo.com/366333472" />,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('Vimeo', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Video vimeo="https://vimeo.com/366333472" />)
    expect(wrapper).toMatchSnapshot()
  })
})

