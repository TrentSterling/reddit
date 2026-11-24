export const site = {
  slug:'reddit', name:'Tront Reddit', description:'Playable builds, devlogs, and links worth passing around.',
  singular:'Submission', plural:'All submissions', newLabel:'Submit on GitHub', theme:'light',
  indexContent({topics, esc, time, author, topicPath, counts, sourceLink}) {
    const ordered = topics.toSorted((a,b) => b.createdAt.localeCompare(a.createdAt));
    const rows = ordered.map(item => {
      const source = sourceLink(item);
      return `<article class="submission row" data-score="${item.upvoteCount}" data-created="${esc(item.createdAt)}">
        <a class="vote" href="${esc(item.url)}" aria-label="${item.upvoteCount} votes. Upvote on GitHub"><span aria-hidden="true">↑</span>${item.upvoteCount}</a>
        <div><div class="meta">${source ? esc(source.hostname) : esc(item.category.name)}</div>
        <h3><a href="${source ? esc(source.href) : topicPath(item)}"${source ? ' rel="ugc nofollow noreferrer"' : ''}>${esc(item.title)}${source ? ' ↗' : ''}</a></h3>
        <div class="by">${author(item)} · ${time(item.createdAt)} · <a href="${topicPath(item)}">Discuss (${counts(item)})</a></div></div></article>`;
    }).join('');
    return `<section><div class="toolbar"><h2>Submissions</h2><label hidden data-js>Sort <select id="sort"><option value="new">Newest</option><option value="top">Top voted</option></select></label></div>
      <div id="entries">${rows || '<p class="empty">Submit the first link or text post.</p>'}</div></section>`;
  }
};
