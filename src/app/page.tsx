export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header className="header">
        <div className="header-container container">
          <a href="/" className="logo">
            総額葬儀
          </a>
          <a href="tel:0138-XX-XXXX" className="contact-phone">
            📞 0138-XX-XXXX
          </a>
        </div>
      </header>

      {/* ヒーロー */}
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

      {/* 問題提起 */}
      <section className="problem" id="problem">
        <div className="container">
          <h2>なぜ総額葬儀なのか</h2>
          <div className="problem-container">
            <img
              src="/api/placeholder/400/320"
              alt="問題のイメージ"
              className="problem-image"
            />
            <div>
              <p>
                葬儀社から提示される見積もりと実際の請求額が大きく異なるケースが多く発生しています。追加費用の発生により、大切な方との最後のお別れの場で金銭的な不安や心配を抱える方が少なくありません。
              </p>
              <div className="testimonial">
                「最初は80万円の見積もりだったのに、実際の請求は100万円を超えていました。突然のことでしたので、その場で支払うしかありませんでした...」
                <br />
                <small>函館市 50代女性</small>
              </div>
              <p>
                函館市の葬儀費用の相場は家族葬で約50〜80万円、一般葬で約100〜150万円と言われていますが、実際には見積もりよりも10〜30万円高くなるケースが少なくありません。
              </p>
              <p>
                総額葬儀は、この「見積もりと実際の請求の差」という問題を解決するために生まれました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="features" id="features">
        <div className="container">
          <h2>サービスの特徴</h2>
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>総額保証</h3>
              <p>
                見積もり金額以上は一切請求しません。急な変更や追加があっても、提示した金額内で対応します。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>選べる明朗会計</h3>
              <p>
                必要なものだけを選んで組み合わせられます。一切の押し売りはなく、ご希望に合わせたプランを提案します。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>地元の信頼</h3>
              <p>
                函館市内の厳選された葬儀社だけを紹介します。品質とサービスにこだわり、安心してお任せいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 見積りシミュレーター */}
      <section className="simulator" id="simulator">
        <div className="container">
          <h2>総額見積りシミュレーター</h2>
          <div className="simulator-container">
            <form id="estimateForm">
              <div className="form-group">
                <label htmlFor="participants">参列者の予想人数</label>
                <select id="participants" className="form-control">
                  <option value="small">10名まで</option>
                  <option value="medium">11〜30名</option>
                  <option value="large">31〜50名</option>
                  <option value="xl">51名以上</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type">希望する葬儀のタイプ</label>
                <select id="type" className="form-control">
                  <option value="family">家族葬</option>
                  <option value="general">一般葬</option>
                  <option value="simple">宗教儀式なし</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">おおよその予算感</label>
                <select id="budget" className="form-control">
                  <option value="low">できるだけ抑えたい（〜50万円）</option>
                  <option value="medium">標準的な内容（50〜100万円）</option>
                  <option value="high">充実した内容（100万円〜）</option>
                </select>
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-primary">
                  見積りを表示する
                </button>
              </div>
            </form>

            <div
              id="estimateResult"
              style={{
                display: "none",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              <h3>お見積り結果</h3>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1c3d5a",
                }}
              >
                総額：<span id="totalAmount">580,000</span>円（税込）
              </p>
              <p>
                <strong>この金額以上の請求は一切ありません</strong>
              </p>
              <div>
                <a href="#contact" className="btn btn-primary">
                  詳細な見積りを依頼する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>よくある不安・質問</h2>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                急な変更があったら追加料金がかかるのでは？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  総額葬儀では、見積もり後の追加費用は一切発生しません。参列者が増えた場合や、当日の追加オプションが発生した場合でも、提示した金額内でご対応します。これが「総額保証」の最大の特徴です。
                </p>
                <p>
                  ただし、事前に計画されていない大幅な内容変更（例：家族葬から一般葬への変更など）の場合は、改めてお見積りをさせていただくことがあります。
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                総額に含まれるものは？含まれないものは？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  <strong>含まれるもの：</strong>
                </p>
                <ul>
                  <li>火葬料金</li>
                  <li>式場使用料</li>
                  <li>棺・祭壇費用</li>
                  <li>ご遺体の搬送・安置費用</li>
                  <li>司会進行費用</li>
                  <li>返礼品（選択した場合）</li>
                  <li>料理・飲み物（選択した場合）</li>
                </ul>
                <p>
                  <strong>含まれないもの：</strong>
                </p>
                <ul>
                  <li>宗教者へのお礼（お布施等）</li>
                  <li>墓地・墓石費用</li>
                  <li>仏壇・仏具の購入費用</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                どんな葬儀社を紹介されるの？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>総額葬儀では、以下の厳格な基準で葬儀社を選定しています：</p>
                <ul>
                  <li>函館市内に拠点があること</li>
                  <li>業界経験5年以上の責任者がいること</li>
                  <li>24時間対応可能なこと</li>
                  <li>明朗会計の理念に賛同していること</li>
                  <li>過去の利用者からの評価が高いこと</li>
                </ul>
                <p>
                  現在、函館市内で5社の葬儀社と提携しており、すべての葬儀社が総額葬儀の品質基準を満たしています。ご希望に合わせて最適な葬儀社をご紹介します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用者の声・事例 */}
      <section className="case-studies" id="cases">
        <div className="container">
          <h2>ご利用者の声・事例</h2>
          <div className="cases-container">
            <div className="case-card">
              <img src="/api/placeholder/150/150" alt="ご利用者の写真" />
              <p className="case-price">
                家族葬：15名参列、<strong>総額58万円</strong>
              </p>
              <p>
                「見積りどおりの金額で、丁寧な対応をしていただきました。追加費用の心配がなかったので、大切な時間に集中できました。」
              </p>
              <small>函館市 T.S様 60代</small>
            </div>

            <div className="case-card">
              <img src="/api/placeholder/150/150" alt="ご利用者の写真" />
              <p className="case-price">
                一般葬：40名参列、<strong>総額98万円</strong>
              </p>
              <p>
                「最初は不安でしたが、総額葬儀で紹介された葬儀社の対応は素晴らしく、金額も当初の見積り通りでした。安心してお任せできました。」
              </p>
              <small>函館市 K.M様 50代</small>
            </div>

            <div className="case-card">
              <img src="/api/placeholder/150/150" alt="ご利用者の写真" />
              <p className="case-price">
                家族葬：8名参列、<strong>総額42万円</strong>
              </p>
              <p>
                「シンプルな内容でしたが、故人の人柄に合った温かい葬儀ができました。予算内で収まり、安心感がありました。」
              </p>
              <small>函館市 Y.T様 40代</small>
            </div>
          </div>
        </div>
      </section>

      {/* 運営会社・担当者の紹介 */}
      <section className="about" id="about">
        <div className="container">
          <h2>運営会社・担当者の紹介</h2>
          <div className="about-container">
            <img
              src="/api/placeholder/300/300"
              alt="代表者の写真"
              className="about-image"
            />
            <div>
              <h3>代表 佐藤 誠</h3>
              <p>
                地元函館で30年、葬儀業界に携わってきました。その中で、多くの方が葬儀費用の「あとから追加」に不安や不満を感じていることを知りました。
              </p>
              <p>
                総額葬儀は、大切な方とのお別れの時間に、金銭的な心配をせずに集中していただきたいという想いから生まれました。函館の皆様に、透明性のある、安心できる葬儀サービスを提供することが私たちの使命です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>ご相談・お問い合わせ</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p>
                24時間いつでもご相談を受け付けております。お気軽にお問い合わせください。
              </p>
              <a href="tel:0138-XX-XXXX" className="contact-phone-large">
                📞 0138-XX-XXXX
              </a>
            </div>

            <div className="contact-options">
              <div className="contact-option">
                <a href="#" className="btn line-button">
                  LINEで相談する
                </a>
              </div>
            </div>

            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-type">ご希望の連絡方法</label>
                <select id="contact-type" className="form-control">
                  <option value="phone">電話</option>
                  <option value="line">LINE</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">ご状況・ご要望</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows={5}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-section">
              <h3>総額葬儀</h3>
              <p>函館初の明朗会計葬儀サービス</p>
              <p>
                〒040-0001
                <br />
                北海道函館市○○町1-2-3
              </p>
              <p>TEL: 0138-XX-XXXX</p>
            </div>

            <div className="footer-section">
              <h3>メニュー</h3>
              <ul className="footer-links">
                <li>
                  <a href="#problem">なぜ総額葬儀か</a>
                </li>
                <li>
                  <a href="#features">サービスの特徴</a>
                </li>
                <li>
                  <a href="#simulator">お見積りシミュレーター</a>
                </li>
                <li>
                  <a href="#faq">よくある質問</a>
                </li>
                <li>
                  <a href="#cases">ご利用事例</a>
                </li>
                <li>
                  <a href="#about">会社概要</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} 総額葬儀 All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
