export default function Home() {
  return (
    <div>
      <header
        style={{
          padding: "20px",
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1c3d5a",
              textDecoration: "none",
            }}
          >
            総額葬儀
          </a>
          <a
            href="tel:0138-XX-XXXX"
            style={{
              color: "#1c3d5a",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            📞 0138-XX-XXXX
          </a>
        </div>
      </header>

      <section
        style={{
          padding: "120px 20px 80px",
          textAlign: "center",
          background: "linear-gradient(135deg, #1c3d5a, #4d7ba0)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
          追加料金なし、驚きなし。
          <br />
          函館の葬儀は「総額葬儀」で
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 30px",
          }}
        >
          最初に決めた金額以上は一切かかりません。函館初の明朗会計葬儀サービス
        </p>
        <div>
          <a href="#simulator" style={btnStylePrimary}>
            30秒で総額見積りを取る
          </a>
          <a href="#contact" style={btnStyleSecondary}>
            無料相談する
          </a>
        </div>
      </section>
    </div>
  );
}

const btnStyleBase = {
  display: "inline-block",
  padding: "12px 30px",
  borderRadius: "50px",
  fontWeight: "bold",
  textDecoration: "none",
  margin: "10px",
  cursor: "pointer",
};

const btnStylePrimary = {
  ...btnStyleBase,
  backgroundColor: "#ff6b35",
  color: "white",
  border: "2px solid #ff6b35",
};

const btnStyleSecondary = {
  ...btnStyleBase,
  backgroundColor: "transparent",
  color: "white",
  border: "2px solid white",
};
