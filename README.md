# ReactResponsiveVideo

ReactResponsiveVideo solves a specific use case and does not provide a player as the marvellous [ReactPlayer][] of Pete Cook but focus on autoplaying videos, which integrates properly into responsive marketing driven websites.

[reactplayer]: https://github.com/CookPete/react-player

## Installation

npm

```bash
npm i react-responsive-video
```

yarn

```bash
yarn add react-responsive-video
```

## Usage

```jsx
import Video from 'react-responsive-video'
;<Video mp4={`file.mp4`} />
```

The component allows the props as follows:

- mp4
- ogg
- webm
- m3u8
- vimeo

### Responsive Sizing

The video could be resized with responsive values based on the breakpoints in [Styled System][].  
Example:

```jsx
<Video ogg={`file.ogg`} height={[320, 400, 480, 560].map(n => n + 'px')} />
```

### Examples

The following examples integrates a video in webm format, provides different heights for defined breakpoints and an object-fit to fill a give box.

```jsx
<Video webm={`file.webm`} height={[320, 400, 480, 560].map(n => n + 'px')} objectFit={`contain`} />
```

[styled system]: https://styled-system.com/responsive-styles

## License

[MIT][]

[mit]: ./LICENSE.md
