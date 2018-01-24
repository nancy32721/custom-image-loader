Image Loader For React!

ImageLoader is a react component for representing loader/placeholder when actual image is loading

Getting started:

Install ImageLoader using npm.

npm install ImageLoader;

example:

import React from 'react';
import ReactDOM from 'react-dom';
import {CustomImageLoader} from 'image-loader';

ReactDOM.render(<CustomImageLoader />, document.getElementById('example')

props required:

src: path of the image you want to see on the screen(mandatory)
loader: can pass custom loader image
