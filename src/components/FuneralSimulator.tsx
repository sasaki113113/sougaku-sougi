// components/FuneralSimulator.tsx
"use client";
import { useState } from "react";

// 葬儀形式の定義
type FuneralType = "二日葬" | "一日葬" | "火葬式" | "直葬";
// グレードの定義
type GradeType = "シンプル" | "スタンダード" | "ハイグレード";
// 宗教者の定義
type ReligiousPersonType = "菩提寺あり" | "手配希望" | "無宗教";

// シミュレーターの入力パラメータの型定義
interface SimulatorParams {
  funeralType: FuneralType;
  coffinGrade: GradeType;
  altarGrade: GradeType;
  familyCount: number;
  guestCount: number;
  returnGiftGrade: GradeType;
  religion: string;
  religiousPerson: ReligiousPersonType;
}

// 価格内訳の型定義
interface PriceBreakdown {
  basicFee: number; // 基本料金
  coffinFee: number; // 棺料金
  altarFee: number; // 祭壇料金
  venueFee: number; // 式場料金
  returnGiftFee: number; // 返礼品料金
  ceremonyFee: number; // 儀式料金
  otherFee: number; // その他費用
}

export default function FuneralSimulator() {
  // 初期値の設定
  const [params, setParams] = useState<SimulatorParams>({
    funeralType: "一日葬",
    coffinGrade: "スタンダード",
    altarGrade: "スタンダード",
    familyCount: 5,
    guestCount: 20,
    returnGiftGrade: "スタンダード",
    religion: "",
    religiousPerson: "手配希望",
  });

  // 計算結果の状態
  const [showResult, setShowResult] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown>({
    basicFee: 0,
    coffinFee: 0,
    altarFee: 0,
    venueFee: 0,
    returnGiftFee: 0,
    ceremonyFee: 0,
    otherFee: 0,
  });

  // 入力値の変更ハンドラー
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "familyCount" || name === "guestCount") {
      // 数値の入力処理
      const numValue = parseInt(value) || 0;
      setParams((prev) => ({
        ...prev,
        [name]: numValue,
      }));
    } else {
      // 文字列の入力処理
      setParams((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // 入力値が変更されたら結果を非表示
    setShowResult(false);
  };

  // 見積り計算ロジック
  const calculateEstimate = () => {
    // 基本料金（葬儀形式による）
    let basicFee = 0;
    switch (params.funeralType) {
      case "二日葬":
        basicFee = 350000;
        break;
      case "一日葬":
        basicFee = 250000;
        break;
      case "火葬式":
        basicFee = 150000;
        break;
      case "直葬":
        basicFee = 100000;
        break;
    }

    // 棺の料金
    let coffinFee = 0;
    switch (params.coffinGrade) {
      case "シンプル":
        coffinFee = 50000;
        break;
      case "スタンダード":
        coffinFee = 100000;
        break;
      case "ハイグレード":
        coffinFee = 200000;
        break;
    }

    // 祭壇の料金
    let altarFee = 0;
    switch (params.altarGrade) {
      case "シンプル":
        altarFee = 80000;
        break;
      case "スタンダード":
        altarFee = 150000;
        break;
      case "ハイグレード":
        altarFee = 300000;
        break;
    }

    // 火葬式と直葬では祭壇の利用を縮小
    if (params.funeralType === "火葬式") {
      altarFee = Math.floor(altarFee * 0.5);
    } else if (params.funeralType === "直葬") {
      altarFee = 0;
    }

    // 式場料金（参列者数による）
    const totalAttendees = params.familyCount + params.guestCount;
    let venueFee = 0;
    if (params.funeralType === "二日葬" || params.funeralType === "一日葬") {
      if (totalAttendees <= 20) {
        venueFee = 100000;
      } else if (totalAttendees <= 50) {
        venueFee = 150000;
      } else {
        venueFee = 200000;
      }
    } else if (params.funeralType === "火葬式") {
      venueFee = 50000;
    }
    // 直葬の場合は式場料金なし

    // 返礼品の料金（参列者数による）
    let returnGiftUnitPrice = 0;
    switch (params.returnGiftGrade) {
      case "シンプル":
        returnGiftUnitPrice = 2000;
        break;
      case "スタンダード":
        returnGiftUnitPrice = 3500;
        break;
      case "ハイグレード":
        returnGiftUnitPrice = 5000;
        break;
    }
    // 返礼品は参列者全員分（火葬式は親族のみ、直葬は無し）
    let returnGiftFee = 0;
    if (params.funeralType === "二日葬" || params.funeralType === "一日葬") {
      returnGiftFee = returnGiftUnitPrice * totalAttendees;
    } else if (params.funeralType === "火葬式") {
      returnGiftFee = returnGiftUnitPrice * params.familyCount;
    }

    // 儀式料金（宗教者による）
    let ceremonyFee = 0;
    if (params.religiousPerson !== "無宗教") {
      if (params.funeralType === "二日葬") {
        ceremonyFee = 100000;
      } else if (params.funeralType === "一日葬") {
        ceremonyFee = 80000;
      } else if (params.funeralType === "火葬式") {
        ceremonyFee = 50000;
      }
    }

    // その他費用（一律）
    const otherFee = 50000;

    // 総額計算
    const calculatedTotal =
      basicFee +
      coffinFee +
      altarFee +
      venueFee +
      returnGiftFee +
      ceremonyFee +
      otherFee;

    // 内訳設定
    const breakdown: PriceBreakdown = {
      basicFee,
      coffinFee,
      altarFee,
      venueFee,
      returnGiftFee,
      ceremonyFee,
      otherFee,
    };

    setTotalPrice(calculatedTotal);
    setPriceBreakdown(breakdown);
    setShowResult(true);
  };

  // 金額のフォーマット（カンマ区切り）
  const formatPrice = (price: number): string => {
    return price.toLocaleString();
  };

  return (
    <div className="funeral-simulator">
      <div className="simulator-form">
        <div className="form-group">
          <label htmlFor="funeralType">葬儀形式</label>
          <select
            id="funeralType"
            name="funeralType"
            className="form-control"
            value={params.funeralType}
            onChange={handleInputChange}
          >
            <option value="二日葬">二日葬</option>
            <option value="一日葬">一日葬</option>
            <option value="火葬式">火葬式</option>
            <option value="直葬">直葬</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="coffinGrade">棺</label>
          <select
            id="coffinGrade"
            name="coffinGrade"
            className="form-control"
            value={params.coffinGrade}
            onChange={handleInputChange}
          >
            <option value="シンプル">シンプル</option>
            <option value="スタンダード">スタンダード</option>
            <option value="ハイグレード">ハイグレード</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="altarGrade">祭壇</label>
          <select
            id="altarGrade"
            name="altarGrade"
            className="form-control"
            value={params.altarGrade}
            onChange={handleInputChange}
          >
            <option value="シンプル">シンプル</option>
            <option value="スタンダード">スタンダード</option>
            <option value="ハイグレード">ハイグレード</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="familyCount">親族人数</label>
          <input
            type="number"
            id="familyCount"
            name="familyCount"
            className="form-control"
            min="1"
            value={params.familyCount}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="guestCount">参列人数（親族以外）</label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            className="form-control"
            min="0"
            value={params.guestCount}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnGiftGrade">返礼品</label>
          <select
            id="returnGiftGrade"
            name="returnGiftGrade"
            className="form-control"
            value={params.returnGiftGrade}
            onChange={handleInputChange}
          >
            <option value="シンプル">シンプル</option>
            <option value="スタンダード">スタンダード</option>
            <option value="ハイグレード">ハイグレード</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="religion">宗教</label>
          <input
            type="text"
            id="religion"
            name="religion"
            className="form-control"
            placeholder="例：浄土真宗、カトリック等"
            value={params.religion}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="religiousPerson">宗教者</label>
          <select
            id="religiousPerson"
            name="religiousPerson"
            className="form-control"
            value={params.religiousPerson}
            onChange={handleInputChange}
          >
            <option value="菩提寺あり">菩提寺あり</option>
            <option value="手配希望">手配希望</option>
            <option value="無宗教">無宗教</option>
          </select>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={calculateEstimate}
          >
            総額見積りを表示する
          </button>
        </div>
      </div>

      {showResult && (
        <div className="result-container mt-5">
          <h3 className="text-center mb-4">お見積り結果</h3>

          <div className="total-price text-center mb-4">
            <p className="total-price-label">総額（税込）</p>
            <p className="total-price-value">{formatPrice(totalPrice)}円</p>
            <p>
              <strong>この金額以上の請求は一切ありません</strong>
            </p>
          </div>

          <div className="breakdown">
            <h4>内訳</h4>
            <table className="breakdown-table">
              <tbody>
                <tr>
                  <th>基本料金</th>
                  <td>{formatPrice(priceBreakdown.basicFee)}円</td>
                </tr>
                <tr>
                  <th>棺</th>
                  <td>{formatPrice(priceBreakdown.coffinFee)}円</td>
                </tr>
                <tr>
                  <th>祭壇</th>
                  <td>{formatPrice(priceBreakdown.altarFee)}円</td>
                </tr>
                <tr>
                  <th>式場費用</th>
                  <td>{formatPrice(priceBreakdown.venueFee)}円</td>
                </tr>
                <tr>
                  <th>返礼品</th>
                  <td>{formatPrice(priceBreakdown.returnGiftFee)}円</td>
                </tr>
                <tr>
                  <th>儀式料金</th>
                  <td>{formatPrice(priceBreakdown.ceremonyFee)}円</td>
                </tr>
                <tr>
                  <th>その他費用</th>
                  <td>{formatPrice(priceBreakdown.otherFee)}円</td>
                </tr>
                <tr className="total-row">
                  <th>合計</th>
                  <td>{formatPrice(totalPrice)}円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="action-buttons text-center mt-4">
            <a href="#contact" className="btn btn-primary">
              詳細な見積りを依頼する
            </a>
          </div>

          <div className="note mt-4">
            <p>
              ※
              上記は一般的な相場に基づく概算です。実際の料金は葬儀社により異なる場合があります。
            </p>
            <p>※ お布施等の宗教者へのお礼は含まれていません。</p>
            <p>
              ※ 火葬場使用料は地域により異なるため、別途お見積りいたします。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
