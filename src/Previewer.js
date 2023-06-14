import React from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = ({ content }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(content, { renderer: renderer });
    return { __html: rawMarkup };
  };

  return <div id='preview' dangerouslySetInnerHTML={getMarkdownText()}></div>;
};

export default Previewer;
