// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import ReactOnRails from 'react-on-rails';
import SampleComponent from './components/SampleComponent.jsx';
ReactOnRails.register({ SampleComponent });
