import Link from "next/link";
import Image from "next/image";
import FuneralSimulator from "../components/FuneralSimulator";

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header className="header">
        <div className="header-container container">
          <Link href="/" className="logo">
            総額葬儀ナビ <span className="sub-logo">〜函館〜</span>
          </Link>
          <a href="tel:0138-XX-XXXX" className="contact-phone">
            📞 0138-XX-XXXX
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="hero">
        <div className="container">
          <h1>
            追加料金なし、総額保証。
            <br />
            函館のお葬式は「総額葬儀ナビ」で
          </h1>
          <p>
            最初にお約束した金額以上は、一切いただきません。
            <br />
            ご家族の心に寄り添う、函館初の明朗会計葬儀サービスです。
          </p>
          <div>
            <a href="#simulator" className="btn btn-primary">
              30秒で見積もりを確認
            </a>
            <a href="#contact" className="btn btn-secondary">
              無料で相談する
            </a>
          </div>
        </div>
      </section>

      {/* 問題提起 */}
      <section className="problem" id="problem">
        <div className="container">
          <h2>なぜ「総額葬儀ナビ」なのか</h2>
          <div className="problem-container">
            <Image
              src="/api/placeholder/400/320"
              alt="問題のイメージ"
              className="problem-image"
              width={400}
              height={320}
              style={{ objectFit: "cover" }}
            />
            <div>
              <p>
                葬儀の見積もりと最終的な請求額に大きな差が出るケースが少なくありません。
                <br />
                追加料金により、思いがけず高額な請求を受けてしまう方もいます。
              </p>
              <div className="testimonial">
                「最初は80万円の見積もりでしたが、最終的には100万円以上に…。
                急なことだったので、その場で支払うしかありませんでした。」
                <br />
                <small>函館市 50代女性</small>
              </div>
              <p>
                家族葬で50〜80万円、一般葬で100〜150万円という相場の中でも、
                実際には10〜30万円の追加費用が発生することも。
              </p>
              <p>
                「総額葬儀ナビ〜函館〜」は、こうした不安を解消し、
                金額の心配をせずにお別れの時間に向き合えるように生まれたサービスです。
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
                最初に提示した金額以上は一切かかりません。
                <br />
                万が一の変更や追加にも、柔軟に対応します。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>必要なものだけ選べる</h3>
              <p>
                不要なサービスは省き、必要なものだけを選んで組み合わせ可能。
                <br />
                押し売りは一切ありません。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>信頼ある地元葬儀社</h3>
              <p>
                函館市内の信頼ある葬儀社のみをご紹介。
                <br />
                丁寧で誠実な対応をお約束します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 見積りシミュレーター */}
      <section className="simulator" id="simulator">
        <div className="container">
          <h2>総額見積りシミュレーター</h2>
          <FuneralSimulator />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>よくあるご質問</h2>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                急な変更があったら追加料金がかかるのでは？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  いいえ、ご安心ください。「総額保証」により、基本的に見積もり後の追加費用は発生しません。
                </p>
                <p>
                  ただし、家族葬から一般葬への変更など、大幅な内容変更の場合は再見積もりをご案内することがあります。
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                総額に含まれるもの・含まれないものは？ <span>+</span>
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
                  <li>返礼品・料理（選択制）</li>
                </ul>
                <p>
                  <strong>含まれないもの：</strong>
                </p>
                <ul>
                  <li>宗教者へのお礼（お布施等）</li>
                  <li>墓地・墓石費用</li>
                  <li>仏壇・仏具の購入費</li>
                </ul>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                どんな葬儀社が対応してくれるの？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>以下の基準を満たした、函館市内の5社と提携しています：</p>
                <ul>
                  <li>函館市に拠点がある</li>
                  <li>経験5年以上の責任者が在籍</li>
                  <li>24時間対応可能</li>
                  <li>明朗会計の方針に賛同</li>
                  <li>高い顧客満足度</li>
                </ul>
                <p>ご希望に合わせ、最適な葬儀社をご紹介いたします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用者の声・事例 */}
      <section className="case-studies" id="cases">
        <div className="container">
          <h2>ご利用者の声</h2>
          <div className="cases-container">{/* 3件の事例は同じ */}</div>
        </div>
      </section>

      {/* 運営会社・担当者の紹介 */}
      <section className="about" id="about">
        <div className="container">
          <h2>運営会社・担当者の紹介</h2>
          <div className="about-container">
            <Image
              src="/api/placeholder/300/300"
              alt="代表者の写真"
              className="about-image"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
            <div>
              <h3>代表よりご挨拶</h3>
              <p>
                学生時代から10年以上、葬儀業界に携わってきました。
                その中で「見積もりと請求の差」に戸惑うご家族の姿を何度も目にしてきました。
              </p>
              <p>
                総額葬儀ナビは、そんな不安をなくし、安心してお別れの時間に集中していただけるよう立ち上げたサービスです。
              </p>
              <p>
                函館の皆様にとって、わかりやすく、信頼できる葬儀の選択肢をお届けしてまいります。
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
                24時間いつでもご相談いただけます。
                <br />
                不安なことがあれば、お気軽にご連絡ください。
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
              <h3>総額葬儀ナビ 〜函館〜</h3>
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
            &copy; {new Date().getFullYear()} 総額葬儀ナビ 〜函館〜 All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
