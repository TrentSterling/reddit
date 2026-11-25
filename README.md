# reddit

[Open the site](https://tront.xyz/reddit/) · [GitHub Discussions](https://github.com/TrentSterling/reddit/discussions)

GitHub Pages serves the public HTML and JSON archive. Anyone can read. Open **Submit**, enter a title, then publish the first message in the embedded giscus composer. GitHub handles sign-in and authorization. Readers can reply and react on the site. Each published conversation has a permanent numbered URL and a linked GitHub Discussion.

The Publish community workflow runs on main pushes, discussion and comment events, manual dispatch, and a six-hour refresh. The periodic build picks up reaction counts and GitHub upvotes.

To build locally, authenticate GitHub CLI with read access to this public repository and run **node scripts/build.mjs** with Node 22 or newer from the repository root. Serve the generated **dist/** directory. The public **feed.json** links to each conversation's **data.json**.

Public posts and replies are rendered as escaped text with clickable web links. Use the linked discussion for full GitHub Markdown and moderation. The site ships no GitHub credential.
