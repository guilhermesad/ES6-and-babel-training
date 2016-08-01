// ES6
function doAsyncOp () {
  return asynchronousOperation().then(function(val) {
    console.log(val);
    return val;
  });
};

// ES7
async function doAsyncOp () {
  let val = await asynchronousOperation();
  console.log(val);
  return val;
};


// ES6
function loadStory() {
  return getJSON('story.json').then(function(story) {
    addHtmlToPage(story.heading);

    return story.chapterURLs.map(getJSON)
      .reduce(function(chain, chapterPromise) {
        return chain.then(function() {
          return chapterPromise;
        }).then(function(chapter) {
          addHtmlToPage(chapter.html);
        });
      }, Promise.resolve());
  }).then(function() {
    addTextToPage("All done");
  }).catch(function(err) {
    addTextToPage("Argh, broken: " + err.message);
  }).then(function() {
    document.qSelector('.spinner').style.display = 'none';
  });
}

// ES7
async function loadStory() {
  try {
    let story = await getJSON('story.json');
    addHtmlToPage(story.heading);
    for (let chapter of story.chapterURLs.map(getJSON)) {
      addHtmlToPage((await chapter).html);
    }
    addTextToPage("All done");
  } catch (err) {
    addTextToPage("Argh, broken: " + err.message);
  }
  document.qSelector('.spinner').style.display = 'none';
}
