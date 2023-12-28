import componentGenerator from './generators/component.js';
import templateGenerator from './generators/template.js';

export default function (plop) {
  componentGenerator(plop);
  templateGenerator(plop);
}
