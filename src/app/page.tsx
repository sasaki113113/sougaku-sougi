export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <a href="#" className="logo">
            総額葬儀
          </a>
          <a href="tel:0138-XX-XXXX" className="contact-phone">
            📞 0138-XX-XXXX
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>
            追加料金なし、驚きなし。
            <br />
            函館の葬儀は&quot;総額葬儀&quot;で
          </h1>
          <p>
            最初に決めた金額以上は一切かかりません。函館初の明朗会計葬儀サービス
          </p>
          <div>
            <a href="#simulator" className="btn btn-primary">
              30秒で総額見積りを取る
            </a>
            <a href="#contact" className="btn btn-secondary">
              無料相談する
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
