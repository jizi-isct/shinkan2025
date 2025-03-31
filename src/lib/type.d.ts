export type Circle = {
  /**
   * サークルの名称
   */
  name: string,
  /**
   * サークルの概要
   */
  description: string,
  /**
   * サークルのSNSなどのリンク
   */
  links: string[],
  /**
   * サークルの画像のurl
   */
  imageUrls: string[],
  /**
   * サークルのカテゴリー
   * - **exercise**: 運動系
   * - **culture**: 文化系
   * - **technology**: 技術系
   */
  circleCategory: CircleCategory,
nvT  /**
   * サークルの種類（公認か非公認か）
   * - **official**: 公認
   * - **unofficial**: 非公認
   */
  circleType: CircleType
}

export type CircleCategory = "exercise" | "culture" | "technology"

export type CircleType = "official" | "unofficial"