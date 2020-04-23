import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    const image = entry.getIn(["data", "image"]);
    const bg = this.props.getAsset(image);

    return html`
      <header>
        <img src="${bg.toString()}" alt="" />
      </header>
      <section>
        <main>${this.props.widgetFor("body")}</main>
      </section>
    `;
  },
});

export default Page;
