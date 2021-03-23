export default   () => {
  const date = new Date().toISOString();
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
       '<div id="app"></div>',
        ` <div id="app" data-version="${date}"></div>`
      )
    }
  }
}