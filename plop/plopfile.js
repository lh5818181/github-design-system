import componentGenerator from './generators/component.js';
import templateGenerator from './generators/template.js';
import pageGenerator from './generators/page.js';

export default function (plop) {
  componentGenerator(plop);
  templateGenerator(plop);
  pageGenerator(plop);
}
