import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <header>
        <img src="${this.props.widgetFor("cover")}" alt="" />
      </header>
      <section>
        <main>${this.props.widgetFor("body")}</main>
      </section>
    `;
  },
});

export default Page;
