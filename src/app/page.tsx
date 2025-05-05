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
          <a href="#contact" className="contact-btn">
            無料相談はこちら
          </a>
        </div>
      </header>

      {/* ヒーロー - 変更なし */}
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
            ご家族の心に寄り添う、函館の明朗会計葬儀サービスです。
          </p>
          <div>
            <a href="#contact" className="btn btn-primary">
              無料相談はこちら
            </a>
            <a href="#simulator" className="btn btn-secondary">
              見積りシミュレーターを試す
            </a>
          </div>
        </div>
      </section>

      {/* 安心ポイント */}
      <section className="trust-points" id="trust-points">
        <div className="container">
          <div className="trust-points-container">
            <div className="trust-point">
              <div className="trust-icon">⚡</div>
              <h3>追加料金なし</h3>
              <p>見積り金額以上の請求はありません</p>
            </div>

            <div className="trust-point">
              <div className="trust-icon">⚡</div>
              <h3>明朗会計</h3>
              <p>必要な費用を明確に提示します</p>
            </div>

            <div className="trust-point">
              <div className="trust-icon">⚡</div>
              <h3>安心サポート</h3>
              <p>経験豊富なスタッフがご案内</p>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起 - 現実的で説得力のある内容に */}
      <section className="problem" id="problem">
        <div className="container">
          <h2>葬儀費用の不安を解消します</h2>
          <div className="problem-container">
            <Image
              src="/api/placeholder/400/320"
              alt="葬儀の相談イメージ"
              className="problem-image"
              width={400}
              height={320}
              style={{ objectFit: "cover" }}
            />
            <div>
              <div className="pain-points">
                <div className="pain-point">
                  <h3>葬儀費用はわかりにくいもの</h3>
                  <p>
                    葬儀費用は内訳や含まれるサービスがわかりにくく、最終的にいくらかかるのか不安になることが少なくありません。
                  </p>
                </div>

                <div className="pain-point">
                  <h3>後から追加される費用</h3>
                  <p>
                    葬儀の進行中に様々な提案を受け、断りづらい状況で追加費用が発生することがあります。
                  </p>
                </div>

                <div className="pain-point">
                  <h3>複数社の比較が難しい</h3>
                  <p>
                    葬儀社ごとに料金体系が異なるため、複数の見積もりを比較することが困難です。
                  </p>
                </div>
              </div>

              <div className="solution-highlight">
                <h3>「総額葬儀ナビ」の特徴</h3>
                <p>
                  当サービスでは、明確な料金提示と総額保証により、これらの不安を解消します。
                  お見積り金額以上の請求は発生しないため、安心して大切な方とのお別れの時間に集中していただけます。
                </p>
                <a href="#contact" className="btn btn-primary">
                  無料相談はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 - 具体的なベネフィットを強調 */}
      <section className="features" id="features">
        <div className="container">
          <h2>サービスの特徴</h2>
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>総額保証</h3>
              <p>
                お見積り金額以上の請求は発生しません。急な変更があった場合でも、追加費用なしで対応します。
              </p>
              <div className="feature-benefit">
                ご予算内で安心して葬儀を執り行えます
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>必要なものだけを選択</h3>
              <p>
                火葬場、棺、祭壇、料理など、各項目ごとに選択肢から必要なものだけを組み合わせることができます。
              </p>
              <div className="feature-benefit">
                無駄な費用をかけずに、ご希望に合った葬儀が可能です
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>信頼できる葬儀社のご紹介</h3>
              <p>
                当社が厳選した信頼できる葬儀社をご紹介します。安心して任せられる葬儀社選びをサポートします。
              </p>
              <div className="feature-benefit">
                探す手間なく、安心できる葬儀社と巡り合えます
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#contact" className="btn btn-primary btn-lg">
              無料相談はこちら
            </a>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="why-choose-us" id="why-choose-us">
        <div className="container">
          <h2>選ばれる理由</h2>
          <div className="choose-us-container">
            <div className="choose-us-content">
              <h3>葬儀費用の不安を解消する「総額保証」</h3>
              <p>
                葬儀業界でよく見られる「見積もりと実際の請求額の差」という問題を解決します。ご遺族の立場に立ち、適正価格で納得のいく葬儀をご提案します。
              </p>
              <ul className="choose-us-list">
                <li>明確な料金提示と総額保証による安心感</li>
                <li>葬儀内容や規模に関わらず、透明性のある料金設定</li>
                <li>経験豊富なスタッフによる丁寧なサポート</li>
                <li>必要なものだけを選べる自由度</li>
              </ul>
              <p>
                総額葬儀ナビは「葬儀費用の不安をなくし、大切な人との最後の時間に集中していただきたい」という思いから生まれたサービスです。
              </p>
              <div className="cta-inline">
                <a href="#contact" className="btn btn-primary">
                  無料相談はこちら
                </a>
              </div>
            </div>
            <div className="choose-us-image">
              <Image
                src="/api/placeholder/450/350"
                alt="サービスイメージ"
                width={450}
                height={350}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 見積りシミュレーター */}
      <section className="simulator" id="simulator">
        <div className="container">
          <h2>総額見積りシミュレーター</h2>
          <p className="simulator-intro">
            簡単な質問に答えるだけで、おおよその葬儀費用の目安がわかります。
          </p>
          <FuneralSimulator />
          <div className="simulator-note">
            <p>
              ※より詳しいお見積りやご相談は、お問い合わせフォームからご連絡ください。
              経験豊富なスタッフが丁寧にご対応いたします。
            </p>
            <div className="text-center mt-3">
              <a href="#contact" className="btn btn-secondary">
                詳しい見積りを相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 安心の流れ */}
      <section className="process" id="process">
        <div className="container">
          <h2>ご利用の流れ</h2>
          <div className="process-container">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>お問い合わせ</h3>
              <p>下記フォームからご相談ください。</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>ご希望のヒアリング</h3>
              <p>ご希望の葬儀内容や予算などをお聞かせください。</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>葬儀社のご紹介</h3>
              <p>ご希望に合った信頼できる葬儀社をご紹介します。</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>お見積り確定</h3>
              <p>総額保証付きの明確なお見積りをご提示します。</p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>葬儀の実施</h3>
              <p>安心してお葬式に臨んでいただけます。</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#contact" className="btn btn-primary">
              無料相談はこちら
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>よくあるご質問</h2>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                急な変更があったら追加料金がかかりますか？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  基本的に見積もり後の追加費用は発生しません。お見積り時に詳細をしっかりとお聞きし、想定される変更についても考慮した上でご提案いたします。
                </p>
                <p>
                  ただし、家族葬から一般葬への変更など、大幅な内容変更の場合は再見積もりをご案内することがあります。その場合も、変更後の内容で改めて総額保証いたします。
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
                <p>お見積り時に詳細をご説明いたします。</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                どのような葬儀社をご紹介いただけますか？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  以下の基準を満たした、信頼できる葬儀社をご紹介しています：
                </p>
                <ul>
                  <li>函館市に拠点がある</li>
                  <li>経験豊富な責任者が在籍</li>
                  <li>丁寧な対応ができる</li>
                  <li>明朗会計の方針に賛同している</li>
                  <li>高いサービス品質を維持している</li>
                </ul>
                <p>お客様のご要望に合わせた最適な葬儀社をご紹介いたします。</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                相談は無料ですか？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  はい、ご相談は完全無料です。お気軽にお問い合わせください。
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                どんな葬儀でも対応可能ですか？ <span>+</span>
              </div>
              <div className="accordion-content">
                <p>
                  家族葬、一般葬、直葬など、様々なタイプの葬儀に対応しております。ご希望の規模や形式に合わせてご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 透明性へのこだわり */}
      <section className="transparency" id="transparency">
        <div className="container">
          <h2>透明性へのこだわり</h2>
          <div className="transparency-container">
            <div className="transparency-content">
              <p>
                総額葬儀ナビでは、葬儀費用の透明性を最も重視しています。お見積り時には全ての費用を明確にご説明し、後から追加費用が発生しないよう徹底しています。
              </p>
              <p>
                また、必要なものだけを選べるシステムにより、無駄な費用を削減。ご家族の負担を軽減しながらも、大切な方を丁寧に送り出せる葬儀をご提案いたします。
              </p>
              <p>
                私たちは葬儀社ではなく、お客様の立場に立った中立的なサービスです。だからこそ、お客様にとって最適な葬儀社と葬儀内容をご紹介できます。
              </p>
              <div className="cta-inline">
                <a href="#contact" className="btn btn-primary">
                  無料相談はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 運営会社・担当者の紹介 - 変更なし */}
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
                私は学生時代から葬儀業界に携わる中で、多くのご遺族が「料金体系がわかりにくい」「後から追加費用が発生した」といった不安を抱えられていることを痛感してまいりました。
              </p>
              <p>
                突然の出来事で心の準備もないまま、短時間で重要な決断をしなければならない状況が多く、十分な情報を得られないまま契約されるケースも少なくありません。
              </p>
              <p>
                当然ながら、函館市内には誠実な葬儀社が多数ございますが、業界全体の情報の不透明さが、ご遺族の不安を大きくしていると感じております。
              </p>
              <p>
                総額葬儀ナビは、そうした不安を解消し、ご家族が大切な方とのお別れの時間に集中していただけるよう立ち上げたサービスです。
              </p>
              <p>
                明朗会計と総額保証を基本理念に、函館市の皆様に安心と信頼をお届けしてまいります。どうぞお気軽にご相談くださいませ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ - フォームにフォーカス */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>無料相談フォーム</h2>
          <div className="contact-container">
            <div className="contact-intro">
              <p>
                葬儀に関するご不安やご質問がございましたら、下記フォームからお気軽にご相談ください。
                経験豊富なスタッフが丁寧にご対応いたします。
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <p>ご相談は完全無料です</p>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <p>お見積りに関する詳しい説明を提供</p>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <p>ご希望に合わせた最適な葬儀プランをご提案</p>
                </div>
              </div>
            </div>

            <form id="contactForm" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  お名前<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                  placeholder="例：葬儀 太郎"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  電話番号<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  required
                  placeholder="例：090-1234-5678"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="例：example@mail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-type">
                  ご相談内容<span className="required">*</span>
                </label>
                <select id="inquiry-type" className="form-control" required>
                  <option value="">選択してください</option>
                  <option value="family">家族葬について</option>
                  <option value="general">一般葬について</option>
                  <option value="direct">直葬について</option>
                  <option value="price">料金について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">ご状況・ご要望</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder="ご不明点や気になることなど、お気軽にお書きください"
                ></textarea>
              </div>

              <div className="form-group">
                <div className="privacy-policy">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    <a href="#" target="_blank">
                      プライバシーポリシー
                    </a>
                    に同意する
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  無料相談を申し込む
                </button>
              </div>

              <p className="form-note">
                ※ご入力いただいた情報は、ご相談対応の目的以外には使用いたしません。
              </p>
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
              <p>函館の明朗会計葬儀サービス</p>
              <p>
                〒040-0001
                <br />
                北海道函館市○○町1-2-3
              </p>
            </div>

            <div className="footer-section">
              <h3>メニュー</h3>
              <ul className="footer-links">
                <li>
                  <a href="#problem">サービスについて</a>
                </li>
                <li>
                  <a href="#features">特徴</a>
                </li>
                <li>
                  <a href="#simulator">お見積りシミュレーター</a>
                </li>
                <li>
                  <a href="#faq">よくある質問</a>
                </li>
                <li>
                  <a href="#transparency">透明性へのこだわり</a>
                </li>
                <li>
                  <a href="#about">運営会社</a>
                </li>
                <li>
                  <a href="#contact">無料相談</a>
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
